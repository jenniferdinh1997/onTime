import tokenService from "./tokenService";
import axios from "axios";

const BASE_URL = "/api/rides/";

export const addRide = async (ride) => {
  const response = await axios.post(`${BASE_URL}/addTrip`, ride);
  return response.data;
}

export const getRides = async () => {
  const response = await axios.get(`${BASE_URL}/getTrips`);
  return response.data;
}
