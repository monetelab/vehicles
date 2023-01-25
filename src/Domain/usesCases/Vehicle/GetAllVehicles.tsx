import { VehicleRepositoryImpl } from "../../../Data/repositories/VehicleRepository";

const { getAllVehicles } = new VehicleRepositoryImpl();

export const getAllVehicleUseCase = async () => {
  return await getAllVehicles();
};
