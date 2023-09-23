export default function useCart() {
  // Crea un carrito vacío en la base de datos
  async function createCart() {
    const cartId = localStorage.getItem("cartId");
    if (cartId) {
      return cartId;
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
      const result = await response.json();
      localStorage.setItem("cartId", result.id);
      return result.id;
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo crear el carrito en la base de datos");
    }
  }

  // Obtiene el ID del carrito
  async function getCartId() {
    try {
      const response = await fetch("http://localhost:8080/api/carts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      const lastCart = result[result.length - 1];
      console.log(lastCart);
      localStorage.setItem("cartId", lastCart);
      return lastCart;
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo obtener el ID del carrito");
    }
  }

  return { createCart, getCartId };
}
