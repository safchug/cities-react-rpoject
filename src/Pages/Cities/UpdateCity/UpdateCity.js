import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

import StoreContext from "../../../store/StoreContext";
import City from "../../../models/City";

import UpdateCityForm from "./UpdateCityForm/UpdateCityForm";

const UpdateCity = () => {
  const { cities } = useContext(StoreContext);

  const { id } = useParams();

  const submit = (e) => {
    const city = new City(e.name, e.location, e.population, e.area, e.found);

    cities.updateCity(id, city);
  };

  return <UpdateCityForm submit={submit}/>;
};

export default UpdateCity;
