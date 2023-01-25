import { VehicleRepositoryImpl } from "../../../Data/repositories/VehicleRepository";

const { getVehicleById } = new VehicleRepositoryImpl();

export const getVehicleByIdUseCase = async (id: number): Promise<unknown> => {
  return await getVehicleById(id);
};
