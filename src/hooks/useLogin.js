import Swal from "sweetalert2";
import { useState } from "react";

export default function useLogin() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  async function postLogin(username, password) {
    try {
      const response = await fetch("http://localhost:8080/api/sessions/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.message !== "Usuario logueado con éxito") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o contraseña incorrectos",
        });
        return;
      } else {
        setisLoggedIn(true);
      }

      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return [isLoggedIn, postLogin];
}
