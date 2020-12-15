import {
  makeObservable,
  observable,
  action,
  runInAction,
} from "mobx";

import axiosInstance from "../services/api/axiosInstance";
import api from "../services/api/api";

class Auth {
  registrationStatus = "pending"; // "pending", "done" or "error"
  registrationResult = null;

  loginStatus = "pending";
  loginError = null;
  user = null;

  constructor() {
    makeObservable(this, {
      registrationStatus: observable,
      registrationResult: observable,
      register: action,

      loginStatus: observable,
      loginError: observable,
      user: observable,
      login: action,

      checkUser: action,

      logOut: action,
    });

  }

  async register(data) {
    try {

      const response = await api.makeRequest({
        url: '/registration',
        method: 'post',
        body: data});

      runInAction(() => {
        this.registrationStatus = "done";
        this.registrationResult = response;
      });
    } catch (err) {
      runInAction(() => {
        this.registrationStatus = "error";
        this.registrationResult = err;
      });
    }
  }

  async login(data) {
    try {
      const response = await api.makeRequest({
        url: '/login',
        method: 'post',
        body: data});
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
        this.loginError = err;
      });
    }
  }

  async checkUser() {
    try {
      const token = localStorage.getItem("accs_tkn");
      if (token) {
        console.log("token exists");
        const response = await axiosInstance({
          method: "post",
          url: "/auth",
          headers: { Authorization: `Bearer ${token}` },
          body: {},
        });

        runInAction(() => {
          this.user = response.data;
        });
      } else {
        throw new Error();
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
