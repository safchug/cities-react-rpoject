import localforage from "localforage";

export default {
  async get(key) {
    try {
    } catch (err) {}
  },

  hasToken() {
    const token = localStorage.getItem("accs_tkn");
    return token ? true : false;
  },
};
