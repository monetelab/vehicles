import { Token } from "../../Domain/entities/Token";
import { TokenLocalRepository } from "../../Domain/repositories/TokenLocalRepository";
import { LocalStorage } from "../sources/local/LocalStorage";

export class TokenLocalRepositoryImpl implements TokenLocalRepository {
  async save(Token: Token): Promise<void> {
    const { save } = LocalStorage();
    await save("Token", JSON.stringify(Token));
  }

  async getToken(): Promise<Token> {
    const { getItem } = LocalStorage();
    const data = await getItem("Token");
    const Token: Token = JSON.parse(data as any);
    return Token;
  }

  async remove(): Promise<void> {
    const { remove } = LocalStorage();
    await remove("Token");
  }
}
