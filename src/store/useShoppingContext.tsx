// react package
import { createContext, useContext, ReactNode } from "react";

// customize hook
import { useLocalStorage } from "../hook/useLocalStorage";

// types
type ShoppingCartProviderProps = {
  children: ReactNode;
};
type ShoppingCartContextProps = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemProps[];
};
type CartItemProps = {
  id: number;
  amount: number;
};

// create context
const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

// useShoppingCart method
export const useShoppingCart = () => useContext(ShoppingCartContext);

// context provider method
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  // cart items state
  const [cartItems, setCartItems] = useLocalStorage(
    "shopping-cart",
    [] as CartItemProps[]
  );

  // cart quantities
  const cartQuantity = cartItems.reduce(
    (qty: number, item) => qty + item.amount,
    0
  );

  // get item quantity
  const getItemQuantity = (id: number) =>
    cartItems.find((item) => item.id === id)?.amount || 0;

  // increment item to cart
  const increaseCartQuantity = (id: number) => {
    setCartItems((items) => {
      const isItemInCart = items.find((item) => item.id === id);
      if (isItemInCart)
        return items.map((item) => {
          if (item.id === id) return { ...item, amount: item.amount + 1 };
          else return item;
        });
      return [...items, { id, amount: 1 }];
    });
  };

  // decrement item from cart
  const decreaseCartQuantity = (id: number) =>
    setCartItems((items) => {
      const isItemInCart = items.find((item) => item.id === id)?.amount;
      if (isItemInCart === 1) return items.filter((item) => item.id !== id);
      else
        return items.map((item) => {
          if (item.id === id) return { ...item, amount: item.amount - 1 };
          else return item;
        });
    });

  // remove item from cart
  const removeFromCart = (id: number) =>
    setCartItems((items) => items.filter((item) => item.id !== id));

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
