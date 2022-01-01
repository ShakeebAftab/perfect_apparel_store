import { createContext, FC, ReactNode, useState } from "react";
import { ProductType } from "src/components/types";

interface CartProductType extends ProductType {
  quantity: number;
  size: string;
}

interface CartContextType {
  getCart: () => CartProductType[];
  addNewProduct: (product: CartProductType) => void;
  removeCartProduct: (id: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface Props {
  children: ReactNode;
}

export const CartContextProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartProductType[]>([]);

  const getCart = () => cart;
  const addNewProduct = (product: CartProductType) =>
    setCart((cart: CartProductType[]) => [...cart, product]);
  const removeCartProduct = (id: string) =>
    setCart((cart) => cart.filter((c) => c.id !== id));
  // TODO: Update Quantity

  console.log(cart);

  return (
    <CartContext.Provider value={{ getCart, addNewProduct, removeCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};
