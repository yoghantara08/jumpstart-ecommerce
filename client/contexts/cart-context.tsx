/* eslint-disable no-unused-vars */
import {
  addCartItemAPI,
  clearCartItemAPI,
  deleteCartItemAPI,
  getCartAPI,
  updateCartItemAPI,
} from "@/lib/cart-api";
import { IProducts } from "@/types/products-type";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import AuthContext from "./auth-context";

type CartState = {
  cartItems: CartItem[];
  loading: boolean;
  error: string | null;
  total: number;
};

type CartItem = {
  quantity: number;
  product: IProducts;
};

type CartAction =
  | { type: "GET_CART"; payload: CartItem[] }
  | { type: "ADD_ITEM"; payload: { item: CartItem; quantity: number } }
  | { type: "UPDATE_ITEM"; payload: CartItem }
  | { type: "DELETE_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | { type: "ERROR"; payload: string | null };

type CartContextType = {
  cart: CartState;
  addItem: (productId: string, quantity: number) => Promise<void>;
  updateItem: (productId: string, quantity: number) => Promise<void>;
  deleteItem: (productId: string) => Promise<void>;
  clearCart: () => void;
};

// CART REDUCER
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cartItems: action.payload, loading: false };
    case "ADD_ITEM": {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.product._id === action.payload.item.product._id
      );
      if (existingItemIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
        return {
          ...state,
          cartItems: updatedCartItems,
          loading: false,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.item],
          loading: false,
        };
      }
    }
    case "UPDATE_ITEM": {
      const updatedCartItems = state.cartItems.map((item) =>
        item.product._id === action.payload.product._id ? action.payload : item
      );
      return { ...state, cartItems: updatedCartItems, loading: false };
    }
    case "DELETE_ITEM": {
      const filteredCartItems = state.cartItems.filter(
        (item) => item.product._id !== action.payload
      );
      return { ...state, cartItems: filteredCartItems, loading: false };
    }
    case "CLEAR_CART":
      return { ...state, cartItems: [], loading: false };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

// INITIAL STATE
const initialState: CartState = {
  cartItems: [],
  loading: false,
  error: null,
  total: 0,
};

// CREATE CONTEXT
const CartContext = createContext<CartContextType>({
  cart: initialState,
  addItem: async () => {},
  updateItem: async () => {},
  deleteItem: async () => {},
  clearCart: () => {},
});

// EXPORT useCart
export const useCart = () => useContext(CartContext);

// CART CONTEXT PROVIDER
const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const { token, user } = useContext(AuthContext);
  const userId = user._id;

  useEffect(() => {
    // function to fetch cart items from API and dispatch GET_CART action
    const fetchCartItems = async () => {
      try {
        const response = await getCartAPI(token, userId);
        const cartItems = response.data.items;
        dispatch({ type: "GET_CART", payload: cartItems });
        dispatch({ type: "ERROR", payload: null });
      } catch (error: any) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    };

    if (userId && token) {
      fetchCartItems();
    }
  }, [token, userId]);

  // ADD CART ITEM HANDLER
  const addItem = async (productId: string, quantity: number) => {
    try {
      const response = await addCartItemAPI(token, userId, productId, quantity);

      dispatch({
        type: "ADD_ITEM",
        payload: { item: response.data.item, quantity },
      });
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  // UPDATE CART ITEM HANDLER
  const updateItem = async (productId: string, quantity: number) => {
    try {
      const response = await updateCartItemAPI(
        token,
        userId,
        productId,
        quantity
      );
      console.log(response.data.item);

      dispatch({
        type: "UPDATE_ITEM",
        payload: response.data.item,
      });
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  // DELETE CART ITEM HANDLER
  const deleteItem = async (productId: string) => {
    try {
      await deleteCartItemAPI(token, userId, productId);
      dispatch({ type: "DELETE_ITEM", payload: productId });
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  // CLEAR CART ITEM HANDLER
  const clearCart = async () => {
    try {
      await clearCartItemAPI(token, userId);
      dispatch({ type: "CLEAR_CART" });
    } catch (error: any) {
      console.log(error);

      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const contextValue: CartContextType = {
    cart,
    addItem,
    updateItem,
    deleteItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
