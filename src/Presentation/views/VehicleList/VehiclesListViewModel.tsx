import React, { useState, useContext } from "react";
import { getAllVehicleUseCase } from "../../../Domain/usesCases/Vehicle/GetAllVehicles";
import { TokenContext } from "../../context/TokenContext";

const DATA = [
  {
    name: "Lamborghini Civic",
    id: 35130,
    image: "http://loremflickr.com/640/640/transport?19039",
  },
  {
    name: "Cadillac A8",
    id: 10327,
    image: "http://loremflickr.com/640/640/transport?79368",
  },
  {
    id: 23596,
    name: "Porsche Focus",
    image: "http://loremflickr.com/640/640/transport?37432",
  },
  {
    name: "Jaguar 1",
    id: 21684,
    image: "http://loremflickr.com/640/640/transport?5050",
  },
  {
    name: "Aston Martin XTS",
    id: 61110,
    image: "http://loremflickr.com/640/640/transport?37614",
  },
  {
    name: "Smart Jetta",
    image: "http://loremflickr.com/640/640/transport?12876",
    id: 68695,
  },
  {
    name: "Porsche Altima",
    image: "http://loremflickr.com/640/640/transport?2964",
    id: 49427,
  },
  {
    name: "Jaguar Fortwo",
    id: 24807,
    image: "http://loremflickr.com/640/640/transport?26757",
  },
  {
    image: "http://loremflickr.com/640/640/transport?56604",
    name: "Ferrari Challenger",
    id: 48072,
  },
  {
    name: "Tesla Aventador",
    image: "http://loremflickr.com/640/640/transport?86641",
    id: 95301,
  },
  {
    name: "Ford Cruze",
    id: 43751,
    image: "http://loremflickr.com/640/640/transport?12181",
  },
  {
    image: "http://loremflickr.com/640/640/transport?84358",
    id: 76972,
    name: "Chrysler Model 3",
  },
  {
    name: "Land Rover Model T",
    id: 72064,
    image: "http://loremflickr.com/640/640/transport?50761",
  },
  {
    id: 78622,
    name: "Fiat LeBaron",
    image: "http://loremflickr.com/640/640/transport?67680",
  },
  {
    name: "Dodge Jetta",
    image: "http://loremflickr.com/640/640/transport?39265",
    id: 86930,
  },
  {
    id: 25877,
    image: "http://loremflickr.com/640/640/transport?70354",
    name: "Mazda Model T",
  },
  {
    name: "Porsche Beetle",
    image: "http://loremflickr.com/640/640/transport?51042",
    id: 10292,
  },
  {
    image: "http://loremflickr.com/640/640/transport?61228",
    id: 33446,
    name: "Honda Alpine",
  },
  {
    name: "Bugatti Colorado",
    id: 96735,
    image: "http://loremflickr.com/640/640/transport?57271",
  },
  {
    image: "http://loremflickr.com/640/640/transport?1050",
    id: 30672,
    name: "Dodge Corvette",
  },
];

const VehicleListViewModel = () => {
  const { removeTokenSession } = useContext(TokenContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [vehicles, setVehicles] = React.useState(DATA);

  React.useEffect(() => {
    getAllVehicles();
  }, []);

  const getAllVehicles = async () => {
    try {
      await getAllVehicleUseCase();
    } catch (error) {
      console.log("error:", error);
      //   setErrorMessage(error);
    }
  };
  const closeUserSession = async () => {
    console.log("fporejmgirlkmjgkrle");

    removeTokenSession("token");
  };

  return {
    vehicles,
    errorMessage,
    closeUserSession,
  };
};

export default VehicleListViewModel;
