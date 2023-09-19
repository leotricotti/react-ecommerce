import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useGitHubAuth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function gitHubData() {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/sessions/github");

      const data = await response.json();

      setIsLoading(false);
      navigate("/products");

      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    isLoading,
    gitHubData,
  };
}
