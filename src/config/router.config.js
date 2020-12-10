import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import CityInfo from "../Pages/Cities/CityInfo";

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
  {
    path: "/city_info/:id",
    component: CityInfo,
    exact: true,
  },
];

export default routerParams;
