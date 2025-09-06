import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem, User } from '../types';

interface AppState {
  cart: CartItem[];
  user: User | null;
  favorites: string[];
  comparison: string[];
  language: 'tr' | 'en';
}

type AppAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_FAVORITES'; payload: string }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: string }
  | { type: 'ADD_TO_COMPARISON'; payload: string }
  | { type: 'REMOVE_FROM_COMPARISON'; payload: string }
  | { type: 'SET_LANGUAGE'; payload: 'tr' | 'en' }
  | { type: 'SET_USER'; payload: User | null };

const initialState: AppState = {
  cart: [],
  user: null,
  favorites: [],
  comparison: [],
  language: 'tr'
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        item => item.product.id === action.payload.product.id
      );
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { product: action.payload.product, quantity: action.payload.quantity, selectedVariants: [] }]
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
      if (state.comparison.length >= 3) return state;
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
      
    case 'SET_USER':
      return { ...state, user: action.payload };
      
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
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