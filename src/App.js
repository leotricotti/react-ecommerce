import "./css/app.css";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";
import Products from "./pages/ProductsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useLogin from "./hooks/useLogin";
import ForgotPassword from "./pages/ForgotPasswordPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading] = useLogin();

  function handleLogin() {
    setIsLoggedIn(true);
  }

  useEffect(() => {
    if (!isLoading) {
      handleLogin();
    }
  }, [isLoading]);

  // function handleLogout() {
  //   setIsLoggedIn(false);
  // }

  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        {isLoggedIn ? (
          <Route path="/products" element={<Products />} />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </main>
  );
}

export default App;
