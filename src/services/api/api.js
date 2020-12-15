import axiosInstance from "./axiosInstance";

export default {

    makeRequest({url, method, body, query, token}) {

        const addquery = query ? `?query=${query}` : "";

        return this.axiosInstance[method](`${url}${addquery}`,
            body, {
            headers: {}});

    }
}