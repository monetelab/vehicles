import axios from "axios";
import { Token } from "../../../../Domain/entities/Token";
import { LocalStorage } from "../../local/LocalStorage";

const ApiVehicle = axios.create({
  baseURL: "http://127.0.0.1:4010",
  headers: {
    "Content-type": "application/json",
  },
});

ApiVehicle.interceptors.request.use(async (config) => {
  const data = await LocalStorage().getItem("Token");
  if (data) {
    const tokenOK: Token = JSON.parse(data as any);
    config.headers!["Authorization"] = `Bearer ${tokenOK?.token || ""}`;
  }
  return config;
});

export { ApiVehicle };
