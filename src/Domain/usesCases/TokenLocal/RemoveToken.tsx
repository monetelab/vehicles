import { TokenLocalRepositoryImpl } from "../../../Data/repositories/TokenLocalRepository";

const { remove } = new TokenLocalRepositoryImpl();

export const RemoveTokenLocalUseCase = async () => {
  return await remove();
};
