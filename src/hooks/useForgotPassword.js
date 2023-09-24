import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useForgotPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function postForgot(username, password, newPassword) {
    setIsLoading(true);

    if (password !== newPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden. Por favor, inténtelo de nuevo",
        showConfirmButton: false,
        timer: 1800,
      }).then(() => {
        setIsLoading(false);
      });
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/sessions/forgot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, newPassword }),
        }
      );

      const result = await response.json();

      if (result.respuesta === "Contrseña actualizada con éxito") {
        Swal.fire({
          icon: "success",
          title: "Contraseña actualizada con éxito",
          showConfirmButton: false,
          timer: 1800,
        }).then(() => {
          navigate("/");
          setTimeout(() => {
            setIsLoading(false);
            navigate("/");
          }, 2000);
        });

        return result;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { postForgot, isLoading };
}
