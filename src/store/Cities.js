import { action, makeObservable, observable, runInAction } from "mobx";

import api from "../services/api/api";

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

      await api.makeRequest(
        {
          method: "post",
          url: "/cities",
          data: city,
          token
        });

      runInAction(() => {
        this.addCityStatus = "done";
      });
    } catch (err) {
      runInAction(() => {
        this.addCityStatus = "error";
        this.addCityError = err;
        console.log('addCityErr', err);
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
}

export default Cities;
