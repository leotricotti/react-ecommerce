import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function postSignup(first_name, last_name, username, password) {
    if (!first_name || !last_name || !username || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return false;
    }

    const data = {
      first_name,
      last_name,
      email: username,
      password,
    };

    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/sessions/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.error,
        });
        return false;
      } else {
        Swal.fire({
          icon: "success",
          title: "Usuario creado correctamente",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
          setIsLoading(false);
        });
        return true;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  return {
    isLoading,
    postSignup,
  };
}
