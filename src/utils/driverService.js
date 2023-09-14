import tokenService from "./tokenService";
import axios from "axios";

const BASE_URL = "/api/drivers";

const signup = async (driver) => {
    const response = await axios.post(`${BASE_URL}/signup/driver`, driver);
    return response.data;
};

export const login = async (creds) => {
    const response = await axios.post(`${BASE_URL}/login/driver`, creds);
    return response.data;
};

export const getDriver = () => {
    return JSON.parse(localStorage.getItem("driver"));
};

export const getAvailable = async () => {
    const response = await axios.get(`${BASE_URL}/available`);
    return response.data;
};

export const acceptRide = async (id, driverId) => {
    const response = await axios.put(`${BASE_URL}/accept/${id}`, {driver: driverId});
    return response.data;
};

export const getTrips = async (driverId) => {
    const response = await axios.get(`${BASE_URL}/trips/${driverId}`);
    return response.data;
};

export const logout = async () => {
    tokenService.removeToken();
};

const driverService = {
    signup,
    // getProfile
  };
  
export default driverService;
  