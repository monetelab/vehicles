import { TokenLocalRepositoryImpl } from "../../../Data/repositories/TokenLocalRepository";
import { Token } from "../../entities/Token";

const { save } = new TokenLocalRepositoryImpl();

export const SaveTokenLocalUseCase = async (Token: Token) => {
  return await save(Token);
};
