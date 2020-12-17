import { makeAutoObservable, runInAction } from "mobx";

import api from "../services/api/api";

class Auth {
  registrationStatus = "pending"; // "pending", "done" or "error"
  registrationResult = null;

  loginStatus = "pending";
  loginResult = null;
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  async register(data) {
    try {
      const response = await api.makeRequest({
        url: "/registration",
        method: "post",
        data,
      });

      runInAction(() => {
        this.registrationStatus = "done";
        this.registrationResult = "You`ve been successfuly registrated";
      });
    } catch (err) {
      runInAction(() => {
        this.registrationStatus = "error";
        if (err.response) {
          this.registrationResult = err.response.message;
        } else {
          this.registrationResult = "Something went wrong";
        }
      });
    }
  }

  async login(data) {
    try {
      const response = await api.makeRequest({
        url: "/login",
        method: "post",
        data,
      });
      const token = response.data.accessToken;
      const { user } = response.data;

      localStorage.setItem("accs_tkn", token);

      runInAction(() => {
        this.loginStatus = "done";
        this.user = user;
      });
    } catch (err) {
      runInAction(() => {
        this.loginStatus = "error";
        this.loginResult = err;
      });
    }
  }

  async checkUser() {
    try {
      const token = localStorage.getItem("accs_tkn");
      if (token) {
        const response = await api.makeRequest({
          url: "/auth",
          method: "post",
          token,
        });

        runInAction(() => {
          this.user = response.data;
        });
      } else {
        throw new Error("anauthorized");
      }
    } catch (err) {
      localStorage.removeItem("accs_tkn");
      runInAction(() => {
        this.user = null;
      });
    }
  }

  logOut() {
    this.loginStatus = "pending";
    this.user = null;
    localStorage.removeItem("accs_tkn");
  }
}

export default Auth;
