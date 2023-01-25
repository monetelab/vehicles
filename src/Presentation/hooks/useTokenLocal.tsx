import React, { useEffect, useState } from "react";
import { Token } from "../../Domain/entities/Token";
import { GetTokenLocalUseCase } from "../../Domain/usesCases/TokenLocal/GetToken";

export const useTokenLocal = () => {
  const [Token, setToken] = useState<Token>();

  useEffect(() => {
    getTokenSession();
  }, []);

  const getTokenSession = async () => {
    const Token = await GetTokenLocalUseCase();
    setToken(Token);
  };

  return {
    Token,
    getTokenSession,
  };
};
