import api from "../services/apiConfig";

export const login = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
