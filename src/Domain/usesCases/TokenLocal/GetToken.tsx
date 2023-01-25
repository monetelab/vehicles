import { TokenLocalRepositoryImpl } from "../../../Data/repositories/TokenLocalRepository";

const { getToken } = new TokenLocalRepositoryImpl();

export const GetTokenLocalUseCase = async () => {
  return await getToken();
};
