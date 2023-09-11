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
}

const driverService = {
    signup,
    // getProfile
  };
  
export default driverService;
  