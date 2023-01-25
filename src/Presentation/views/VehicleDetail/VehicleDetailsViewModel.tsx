import React, { useContext } from "react";
import { getVehicleByIdUseCase } from "../../../Domain/usesCases/Vehicle/GetVehicleById";
import { TokenContext } from "../../context/TokenContext";
const vehicle = {
  brand: "Volkswagen",
  fuel: "Electric",
  id: 78371,
  image: "http://loremflickr.com/1280/720/transport?4378",
  model: "XC90wdewdfewfdewfdwefwefew",
  type: "Wagon",
  vin: "GCLNHW7XF5DA30360",
};

export const VehicleDetailsViewModel = ({ IdSelection }) => {
  const [vehicleDinamic, setVehicleDinamic] = React.useState(vehicle);
  const { removeTokenSession } = useContext(TokenContext);
  const closeUserSession = async () => {
    removeTokenSession("token");
  };

  const getVehicle = async (IdSelection) => {
    setVehicleDinamic(await getVehicleByIdUseCase(IdSelection));
  };
  React.useEffect(() => {
    getVehicle(IdSelection);
  }, []);
  console.log("cerdscedcseds", IdSelection);

  return {
    vehicleDinamic,
    closeUserSession,
  };
};
