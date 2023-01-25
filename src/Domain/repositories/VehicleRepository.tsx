import { Vehicle } from "../entities/Vehicle";
export interface VehicleRepository {
  getAllVehicles(): Promise<Vehicle[]>;
  getVehicleById(id: number): Promise<unknown>;
}
