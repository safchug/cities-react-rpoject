import axiosInstance from "./axiosInstance";

export default {
  makeRequest({ url, method, data, query, token }) {
    const addquery = query ? `?query=${query}` : "";

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    return axiosInstance[method](`${url}${addquery}`, data, {
      headers: headers,
    });
  },
};
