
// ADMIN APIs

import api from "../services/apiConfig";

export const getRoles = () => {
  return api.get("/admin/roles");
};

export const getUsers = () => {
  return api.get("/admin/users");
};

export const createUser = (data) => {
  return api.post("/admin/users", data);
};

export const toggleUserStatus = (userId) => {
  return api.put(`/admin/users/${userId}/status`);
};
