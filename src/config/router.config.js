import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login/Login";
import Registration from "../Pages/Auth/Registration/Registration";
import CityInfo from "../Pages/Cities/CityInfo/CityInfo";

import AddCityFrom from "../Pages/Cities/AddCity/AddCity";
import UpdateCityFrom from "../Pages/Cities/UpdateCity/UpdateCity";

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
  {
    path: "/add_form",
    component: AddCityFrom,
    exact: true,
  },
  {
    path: "/update_from/:id",
    component: UpdateCityFrom,
    exact: true,
  },
];

export default routerParams;
