export default function useCart() {
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
  return [createCart];
}
