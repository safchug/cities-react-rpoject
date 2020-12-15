import { useContext } from "react";

import CityFormLayout from "../../../Components/Layouts/CityForm/CityFormLayout";
import StoreContext from "../../../store/StoreContext";
import City from "../../../models/City";
import CustomAlert from "../../../Components/Alert/Alert";

import { observer } from "mobx-react-lite";

import "./style.css";
import AddCityForm from "./AddCityForm/AddCityForm";

const AddCity = observer(() => {
  const { cities } = useContext(StoreContext);

  const submit = (e) => {
    const city = new City(e.name, e.location, e.population, e.area, e.found);

    cities.addCity(city);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <CityFormLayout className="add_city_from">
      {cities.addCityStatus === "done" && (
        <CustomAlert message="the city has been added successfuly!" />
      )}
      {cities.addCityStatus === "error" && (
        <CustomAlert message={cities.addCityError} type="error" />
      )}

      <AddCityForm submit={submit}/>
    </CityFormLayout>
  );
});

export default AddCity;
