import React from "react";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    if (data.get("email") == "user" && data.get("password") === "user123") {
      navigate("/dashboard", { replace: true });
    }
  };

  return {
    handleSubmit,
  };
};
