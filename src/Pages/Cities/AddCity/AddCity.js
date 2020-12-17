import { useContext } from "react";

import CityFormLayout from "../../../Components/Layouts/CityForm/CityFormLayout";
import StoreContext from "../../../store/StoreContext";
import Alert from "../../../Components/Alert/Alert";

import { observer } from "mobx-react-lite";

import "./style.css";
import AddCityForm from "../../../Components/AddCityForm/AddCityForm";

const AddCity = observer(() => {
  const { cities } = useContext(StoreContext);

  const submit = (e) => {
    const city = {
      name: e.name,
      location: e.location,
      population: e.population,
      area: e.area,
      found: e.found,
    };

    cities.addCity(city);
  };

  return (
    <CityFormLayout className="add_city_from">
      <Alert status={cities.addCityStatus} message={cities.addCityResult} />
      <AddCityForm submit={submit} />
    </CityFormLayout>
  );
});

export default AddCity;
