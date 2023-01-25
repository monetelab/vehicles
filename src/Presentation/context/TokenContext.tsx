import React, { createContext, useState, useEffect } from "react";
import { Token } from "../../Domain/entities/Token";
import { SaveTokenLocalUseCase } from "../../Domain/usesCases/TokenLocal/SaveToken";
import { GetTokenLocalUseCase } from "../../Domain/usesCases/TokenLocal/GetToken";
import { RemoveTokenLocalUseCase } from "../../Domain/usesCases/TokenLocal/RemoveToken";

export const TokenInitialState = {
  time: "",
  token: "",
};

export interface TokenContextProps {
  Token: Token;
  saveTokenSession: (Token: Token) => Promise<void>;
  getTokenSession: () => Promise<void>;
  removeTokenSession: () => Promise<void>;
}

export const TokenContext = createContext({} as TokenContextProps);

export const TokenProvider = ({ children }: any) => {
  const [Token, setToken] = useState(TokenInitialState);

  useEffect(() => {
    getTokenSession();
  }, []);

  const saveTokenSession = async (Token: Token) => {
    await SaveTokenLocalUseCase(Token);
    setToken(Token);
  };

  const getTokenSession = async () => {
    const Token = await GetTokenLocalUseCase();
    setToken(Token);
  };

  const removeTokenSession = async () => {
    await RemoveTokenLocalUseCase();
    setToken(TokenInitialState);
  };

  return (
    <TokenContext.Provider
      value={{
        Token,
        saveTokenSession,
        getTokenSession,
        removeTokenSession,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
