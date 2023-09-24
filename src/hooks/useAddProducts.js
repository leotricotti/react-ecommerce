export default function useAddProducts() {
  //Obtener id del carrito
  async function getCartId() {
    try {
      if (localStorage.getItem("cartId")) {
        return null;
      } else {
        const response = await fetch("http://localhost:8080/api/carts");
        const carts = await response.json();
        const lastCart = carts[carts.length - 1];
        return localStorage.setItem("cartId", lastCart._id);
      }
    } catch (error) {
      console.log(error);
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
