import { Vehicle } from "../../Domain/entities/Vehicle";
import { VehicleRepository } from "../../Domain/repositories/VehicleRepository";
import { AxiosError } from "axios";
import { ApiVehicle } from "../sources/remote/api/ApiVehicle";
import { ResponseApiVehicle } from "../sources/remote/models/ResponseApiVehicles";

export class VehicleRepositoryImpl implements VehicleRepository {
  async getAllVehicles(): Promise<Vehicle[]> {
    try {
      const response = await ApiVehicle.get<Vehicle[]>("/vehicle");
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      //console.log("ERROR: " + JSON.stringify(e.response?.data));
      return Promise.resolve([]);
    }
  }
  async getVehicleById(id: number): Promise<unknown> {
    try {
      const response = await ApiVehicle.get<Vehicle>(`/vehicle/${id}`);

      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log("ERROR: " + JSON.stringify(e.response?.data));
      const apiError: ResponseApiVehicle = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
