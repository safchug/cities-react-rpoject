import { makeAutoObservable, runInAction } from "mobx";

import api from "../services/api/api";

class Cities {
  citiesList = null;
  loading = false;
  CitiesListError = null;
  city = null;
  cityError = null;
  deleteCityStatus = "pending";
  deleteCityResult = null;
  addCityStatus = "pending";
  addCityResult = null;
  updateCityStatus = "pending";
  updateCityResult = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCitiesList(query) {
    try {
      console.log("loading true");
      runInAction(() => {
        this.loading = true;
      });

      const response = await api.makeRequest({
        url: "/cities",
        method: "get",
        query,
      });

      runInAction(() => {
        console.log("loading false");
        this.loading = false;
        this.citiesList = response.data;
      });
    } catch (err) {
      runInAction(() => {
        console.log("error");
        this.loading = false;
        this.CitiesListError = err;
      });
    }
  }

  async fetchCityById(id) {
    try {
      const response = await api.makeRequest({
        url: `/cities/${id}`,
        method: "get",
      });

      runInAction(() => {
        this.city = response.data;
      });
    } catch (err) {
      this.cityError = err;
    }
  }

  async deleteCity(id) {
    try {
      const token = localStorage.getItem("accs_tkn");
      if (!token) throw new Error("User is not authorized");

      await api.makeRequest({
        method: "delete",
        url: `cities/${id}`,
        token,
      });

      runInAction(() => {
        this.deleteCityStatus = "done";
        this.deleteCityResult = "The city has been deleted";
      });
    } catch (err) {
      runInAction(() => {
        this.deleteCityStatus = "error";
        if (err.response) {
          this.addCityResult = err.response.message;
        } else {
          this.addCityResult = "Something went wrong";
        }
      });
    }
  }

  async addCity(city) {
    try {
      const token = localStorage.getItem("accs_tkn");
      if (!token) throw new Error("User is not authorized");

      await api.makeRequest({
        method: "post",
        url: "/cities",
        data: city,
        token,
      });

      runInAction(() => {
        this.addCityStatus = "done";
        this.addCityResult = "The city has been added";
      });
    } catch (err) {
      runInAction(() => {
        this.addCityStatus = "error";

        if (err.response) {
          this.addCityResult = err.response.message;
        } else {
          this.addCityResult = "Something went wrong";
        }
      });
    }
  }

  async updateCity(id, city) {
    try {
      const token = localStorage.getItem("accs_tkn");
      if (!token) throw new Error("User is not authorized");
      await api.makeRequest({
        method: "put",
        url: `/cities/${id}`,
        token,
        data: city,
      });

      runInAction(() => {
        this.updateCityStatus = "done";
      });
    } catch (err) {
      runInAction(() => {
        this.updateCityStatus = "error";
        this.updateCityError = err;
      });
    }
  }

  clear() {
    this.deleteCityStatus = "pending";
    this.deleteCityResult = null;
    this.addCityStatus = "pending";
    this.addCityResult = null;
    this.updateCityStatus = "pending";
    this.updateCityResult = null;
  }
}

export default Cities;
