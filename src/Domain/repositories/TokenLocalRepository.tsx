import { Token } from "../entities/Token";
export interface TokenLocalRepository {
  save(Token: Token): Promise<void>;
  getToken(): Promise<Token>;
  remove(): Promise<void>;
}
