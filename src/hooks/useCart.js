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
      localStorage.setItem("cartId", result._id);
      return result.id;
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo crear el carrito en la base de datos");
    }
  }

  //Ruta que agrega el id del carrito como referencia al usuario
  const addCartId = async () => {
    return new Promise(async (resolve, reject) => {
      const cartId = localStorage.getItem("cartId");
      const user = localStorage.getItem("user");

      while (!cartId) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      const response = await fetch("http://localhost:8080/api/userCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartId,
          user,
        }),
      });
      resolve(response);
    });
  };

  return { createCart, addCartId };
}
