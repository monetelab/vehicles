import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiVehicle } from "../sources/remote/api/ApiVehicle";
import { ResponseApiVehicle } from "../sources/remote/models/ResponseApiVehicles";

export class AuthRepositoryImpl implements AuthRepository {
  async login(username: string, password: string) {
    try {
      const response = await ApiVehicle.post(
        `/login?username=${username}&password=${password}`,
        { username, password }
      );
      return Promise.resolve(response);
    } catch (error) {
      let e = error as AxiosError;
      const apiError: ResponseApiVehicle = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
