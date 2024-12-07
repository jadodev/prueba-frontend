import React, { createContext, useReducer, ReactNode, useEffect } from 'react';
import { Product, CartItem } from '../types';

type CartState = Record<number, CartItem>;

type CartAction = 
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'REMOVE_PRODUCT'; payload: number }; 

const initialState: CartState = {};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const { _id, ...product } = action.payload;

      if (state[_id]) {
        return {
          ...state,
          [_id]: {
            ...state[_id],
            cantidad: state[_id].cantidad + 1,
          },
        };
      }

      return {
        ...state,
        [_id]: { _id, ...product, cantidad: 1 },
      };
    }

    case 'REMOVE_PRODUCT': {
      const { [action.payload]: _, ...rest } = state; 
      return rest;
    }

    default:
      throw new Error(`Acción no soportada: ${action}`);
  }
};

interface CartContextProps {
  cart: CartState;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  getProductCount: () => number;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const loadCartFromStorage = (): CartState => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : initialState;
  };

  const [cart, dispatch] = useReducer(cartReducer, loadCartFromStorage());

  const addProduct = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const removeProduct = (id: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: id });
  };

  const getProductCount = () => {
    return Object.keys(cart).length;
  };

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart)); 
  }, [cart]); 
  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, getProductCount }}>
      {children}
    </CartContext.Provider>
  );
};
