export default function useAddProducts() {
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
      const lastCart =
        result.carts && result.carts.length > 0
          ? result.carts[result.carts.length - 1]
          : null;
      localStorage.setItem("cartId", lastCart._id);
      return lastCart;
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo obtener el ID del carrito");
    }
  }

  // Agrega productos al carrito
  const addProduct = async (id) => {
    const cartId = localStorage.getItem("cartId");
    const response = await fetch(
      `http://localhost:8080/api/carts/${cartId}/product/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          op: "add",
        }),
      }
    );
    getCartId();
    return response;
  };

  return [addProduct];
}
