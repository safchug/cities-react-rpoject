import { Fragment, useContext } from "react";

import CityForm from "../../../Components/UI/Cities/CityForm/CityForm";
import CityFormLayout from "../../../Components/UI/Cities/CityForm/CityFormLayout";
import StoreContext from "../../../store/StoreContext";
import City from "../../../models/City";
import CustomAlert from "../../../Components/UI/CustomAlert";

import "./style.css";
import { observer } from "mobx-react-lite";

const AddCityFrom = observer(() => {
  const { cities } = useContext(StoreContext);

  const submit = (e) => {
    const city = new City(e.name, e.location, e.population, e.area, e.found);

    cities.addCity(city);
  };

  return (
    <CityFormLayout className="add_city_from">
      {cities.addCityStatus === "done" && (
        <CustomAlert message="the city has been added successfuly!" />
      )}
      {cities.addCityStatus === "error" && (
        <CustomAlert message={cities.addCityError} type="error" />
      )}

      <CityForm submit={submit} actionType="Add" />
    </CityFormLayout>
  );
});

export default AddCityFrom;
