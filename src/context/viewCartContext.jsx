import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [viewCart, setViewCart] = useState(true);

  const onToggleCart = () => {
    setViewCart(!viewCart);
  }

  return (
    <CartContext.Provider value={{ viewCart, onToggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useViewCart = () => useContext(CartContext);