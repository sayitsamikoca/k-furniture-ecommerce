import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { AppState, AppAction, Product, ProductVariant, CustomOptions } from '../types';

const initialState: AppState = {
  cart: [],
  user: null,
  favorites: [],
  comparison: [],
  language: 'tr',
  currency: 'TRY',
  isLoading: false,
  error: null
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        item => item.product.id === action.payload.product.id &&
        JSON.stringify(item.selectedVariants) === JSON.stringify(action.payload.variants || []) &&
        JSON.stringify(item.customOptions) === JSON.stringify(action.payload.customOptions)
      );
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { 
            product: action.payload.product, 
            quantity: action.payload.quantity, 
            selectedVariants: action.payload.variants || [],
            customOptions: action.payload.customOptions
          }]
        };
      }
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };
      
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
      
    case 'CLEAR_CART':
      return { ...state, cart: [] };
      
    case 'ADD_TO_FAVORITES':
      if (state.favorites.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
      
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
      
    case 'ADD_TO_COMPARISON':
      if (state.comparison.length >= 3 || state.comparison.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        comparison: [...state.comparison, action.payload]
      };
      
    case 'REMOVE_FROM_COMPARISON':
      return {
        ...state,
        comparison: state.comparison.filter(id => id !== action.payload)
      };
      
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
      
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
      
    case 'SET_USER':
      return { ...state, user: action.payload };
      
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
      
    case 'SET_ERROR':
      return { ...state, error: action.payload };
      
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('kmobilya_cart');
      const savedFavorites = localStorage.getItem('kmobilya_favorites');
      const savedComparison = localStorage.getItem('kmobilya_comparison');
      const savedLanguage = localStorage.getItem('kmobilya_language');
      const savedCurrency = localStorage.getItem('kmobilya_currency');
      
      if (savedCart) {
        const cart = JSON.parse(savedCart);
        cart.forEach((item: any) => {
          dispatch({ 
            type: 'ADD_TO_CART', 
            payload: { 
              product: item.product, 
              quantity: item.quantity,
              variants: item.selectedVariants,
              customOptions: item.customOptions
            } 
          });
        });
      }
      
      if (savedFavorites) {
        const favorites = JSON.parse(savedFavorites);
        favorites.forEach((id: string) => {
          dispatch({ type: 'ADD_TO_FAVORITES', payload: id });
        });
      }
      
      if (savedComparison) {
        const comparison = JSON.parse(savedComparison);
        comparison.forEach((id: string) => {
          dispatch({ type: 'ADD_TO_COMPARISON', payload: id });
        });
      }
      
      if (savedLanguage) {
        dispatch({ type: 'SET_LANGUAGE', payload: savedLanguage });
      }
      
      if (savedCurrency) {
        dispatch({ type: 'SET_CURRENCY', payload: savedCurrency });
      }
    } catch (error) {
      console.error('Error loading state from localStorage:', error);
    }
  }, []);
  
  // Save state to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('kmobilya_cart', JSON.stringify(state.cart));
      localStorage.setItem('kmobilya_favorites', JSON.stringify(state.favorites));
      localStorage.setItem('kmobilya_comparison', JSON.stringify(state.comparison));
      localStorage.setItem('kmobilya_language', state.language);
      localStorage.setItem('kmobilya_currency', state.currency);
    } catch (error) {
      console.error('Error saving state to localStorage:', error);
    }
  }, [state.cart, state.favorites, state.comparison, state.language, state.currency]);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};