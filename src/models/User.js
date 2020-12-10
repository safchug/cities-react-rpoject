export default class User {
  constructor(name = "", mail = "", birthday = "", password = "") {
    this.name = name;
    this.mail = mail;
    this.birthday = birthday;
    this.password = password;
  }
}
