import { useState } from "react";

export default function useCart() {
  const [cartId, saveCartId] = useState("");

  //Crea un carrito vacío en la base de datos
  async function createCart() {
    if (localStorage.getItem("cartId")) {
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: [],
        }),
      });
      await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  //Obtener carrito
  if (localStorage.getItem("cartId") === null) {
    localStorage.setItem("cartId", cartId);
  }

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

  return [createCart, getCartId];
}
