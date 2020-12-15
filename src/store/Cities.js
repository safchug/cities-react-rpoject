import { action, makeObservable, observable, runInAction } from "mobx";

import axiosInstance from "../services/api/axiosInstance";

class Cities {
  citiesList = null;
  loading = false;
  CitiesListError = null;
  city = null;
  cityError = null;
  deleteCitySuccess = false;
  deleteCityError = null;
  addCityStatus = "pending";
  addCityError = null;
  updateCityStatus = "";
  updateCityError = null;

  constructor() {
    makeObservable(this, {
      citiesList: observable,
      loading: observable,
      CitiesListError: observable,
      fetchCitiesList: action,

      city: observable,
      fetchCityById: action,

      deleteCitySuccess: observable,
      deleteCityError: observable,
      deleteCity: action,
      clearDeletingState: action,

      addCityStatus: observable,
      addCityError: observable,
      addCity: action,

      updateCityStatus: observable,
      updateCityError: observable,
      updateCity: action,
    });
  }

  async fetchCitiesList(query) {
    try {
      console.log("loading true");
      runInAction(() => {
        this.loading = true;
      });

      const addquery = query ? `?query=${query}` : "";

      const response = await axiosInstance({
        method: "get",
        url: `/cities${addquery}`,
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
      const response = await axiosInstance({
        method: "get",
        url: `/cities/${id}`,
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

      await axiosInstance({
        method: "delete",
        url: `cities/${id}`,
        headers: { Authorization: `Bearer ${token}` },
      });
      runInAction(() => {
        this.deleteCitySuccess = true;
      });
    } catch (err) {
      runInAction(() => {
        this.deleteCitySuccess = false;
        this.deleteCityError = err;
      });
    }
  }

  clearDeletingState() {
    this.deleteCityError = null;
    this.deleteCitySuccess = false;
  }

  async addCity(city) {
    try {
      const token = localStorage.getItem("accs_tkn");
      if (!token) throw new Error("User is not authorized");
      await axiosInstance({
        method: "post",
        url: "/cities",
        headers: { Authorization: `Bearer ${token}` },
        data: city,
      });

      runInAction(() => {
        this.addCityStatus = "done";
      });
    } catch (err) {
      runInAction(() => {
        this.addCityStatus = "error";
        this.addCityError = err;
      });
    }
  }

  async updateCity(id, city) {
    try {
      const token = localStorage.getItem("accs_tkn");
      if (!token) throw new Error("User is not authorized");
      await axiosInstance({
        method: "put",
        url: `/cities/${id}`,
        headers: { Authorization: `Bearer ${token}` },
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
}

export default Cities;
