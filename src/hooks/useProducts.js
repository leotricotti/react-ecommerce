import { useState } from "react";

export default function useProducts() {
  const [cartId, saveCartId] = useState("");

  if (localStorage.getItem("cartId") === null) {
    localStorage.setItem("cartId", cartId);
  }

  //Obtener carrito
  async function getCartId() {
    try {
      const response = await fetch("http://localhost:8080/api/carts");
      const carts = await response.json();
      const lastCart = carts[carts.length - 1];
      saveCartId(lastCart._id);
    } catch (error) {
      console.log(error);
    }
  }

  return [getCartId];
}
