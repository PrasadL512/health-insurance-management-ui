import api from "../services/apiConfig";

export const getUsers = async () => {
  const response = await api.get("/admin/users");
  return response.data;
};

export const getRoles = async () => {
  const response = await api.get("/admin/roles");
  return response.data;
};

export const toggleUserStatus = async (id) => {
  const response = await api.put(`/admin/users/${id}/status`);
  return response.data;
};

export const createUser = async (data) => {
  const response = await api.post("/admin/users", data);
  return response.data;
};