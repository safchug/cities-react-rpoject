import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Registration from "../Pages/Auth/Registration";
import CityInfo from "../Pages/Cities/CityInfo/CityInfo";
import AddCityFrom from "../Pages/Cities/AddCity/AddCity";
import UpdateCity from "../Pages/Cities/UpdateCity/UpdateCity";
import NotFound from "../Pages/NotFound";

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
    protected: true,
  },
  {
    path: "/update/:id",
    component: UpdateCity,
    exact: false,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routerParams;
