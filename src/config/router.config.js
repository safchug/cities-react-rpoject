import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";

const routerParams = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/registration",
    component: Registration,
    exact: true,
  },
];

export default routerParams;
