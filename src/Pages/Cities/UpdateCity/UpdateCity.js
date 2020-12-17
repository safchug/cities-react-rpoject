import { useContext } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

import StoreContext from "../../../store/StoreContext";

import UpdateCityForm from "../../../Components/UpdateCityForm/UpdateCityForm";

const UpdateCity = () => {
  const { cities } = useContext(StoreContext);

  const { id } = useParams();

  const submit = (e) => {
    const city = {
      name: e.name,
      location: e.location,
      population: e.population,
      area: e.area,
      found: e.found,
    };

    cities.updateCity(id, city);
  };

  return <UpdateCityForm submit={submit} />;
};

export default UpdateCity;
