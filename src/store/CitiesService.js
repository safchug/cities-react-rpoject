import { action, makeObservable, observable, runInAction } from "mobx";

import axiosInstance from "../utils/AxiosInstance";

class CitiesService {
  citiesList = null;
  loading = false;
  CitiesListError = null;
  city = null;
  cityError = null;

  constructor() {
    makeObservable(this, {
      citiesList: observable,
      loading: observable,
      CitiesListError: observable,
      fetchCitiesList: action,

      city: observable,
      fetchCityById: action,
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
}

export default CitiesService;
