import axios from "axios";

export const getAllProduct = async (): Promise<any> => {
  await axios.get("http://localhost:8085/api/v1.0/getProducts");
};

export const getType = async () => {
  await axios.get("http://localhost:8085/api/v1.1/getAll");
};

export const getBrand = () => {
  axios.get("http://localhost:8085/api/v1.1/getALl");
};

export const getSize = () => {
  axios.get("http://localhost:8085/api/v1.2/getALl");
};

export const getColor = () => {
  axios.get("http://localhost:8085/api/v1.4/getALl");
};
