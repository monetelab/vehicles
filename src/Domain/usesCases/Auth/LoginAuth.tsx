import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const { login } = new AuthRepositoryImpl();

export const LoginAuthUseCase = async (username: string, password: string) => {
  return await login(username, password);
};
