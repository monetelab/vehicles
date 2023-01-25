import { ResponseApiVehicle } from "../../Data/sources/remote/models/ResponseApiVehicles";

export interface AuthRepository {
  login(username: string, password: string): Promise<ResponseApiVehicle>;
}
