import React, { useState, useEffect, useContext } from "react";
import { LoginAuthUseCase } from "../../../Domain/usesCases/Auth/LoginAuth";
import { TokenContext } from "../../context/TokenContext";

const LoginViewModel = () => {
  const { Token, saveTokenSession } = useContext(TokenContext);
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (username: string, password: string) => {
    try {
      if (isValidForm(username, password)) {
        const response = await LoginAuthUseCase(username, password);
      }
    } catch (error) {
      console.log("error:", error);
      //   setErrorMessage(error);
    }

    if (isValidForm(username, password)) {
      const response = await LoginAuthUseCase(username, password);
      if (response.status !== 200) {
        setErrorMessage("net error");
      } else {
        await saveTokenSession(response.data);
      }
    }
  };
  useEffect(() => {}, [errorMessage]);

  const isValidForm = (username: string, password: string): boolean => {
    if (username === "") {
      setErrorMessage("Ingresa el correo electronico");
      return false;
    }
    if (password === "") {
      setErrorMessage("Ingresa la contraseña");
      return false;
    }

    return true;
  };

  return {
    Token,
    login,
    errorMessage,
  };
};

export default LoginViewModel;
