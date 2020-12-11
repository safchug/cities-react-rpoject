import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CityForm from "../../../Components/UI/Cities/CityForm/CityForm";
import CityFormLayout from "../../../Components/UI/Cities/CityForm/CityFormLayout";

import "./style.css";
import { observer } from "mobx-react-lite";
import StoreContext from "../../../store/StoreContext";
import City from "../../../models/City";
import CustomAlert from "../../../Components/UI/CustomAlert";

const UpdateCityFrom = observer(() => {
  const { cities } = useContext(StoreContext);

  const initialState = new City("", "", "", "", "");
  const [city, setCity] = useState(initialState);

  const { id } = useParams();

  useEffect(() => {
    cities.fetchCityById(id);
  }, []);

  const submit = (e) => {
    const city = new City(e.name, e.location, e.population, e.area, e.found);

    cities.updateCity(id, city);
  };

  return (
    <CityFormLayout className="update_city_from">
      {cities.updateCityStatus === "done" && (
        <CustomAlert message="The city has been successfuly updated" />
      )}
      {cities.updateCityStatus === "error" && (
        <CustomAlert message={cities.updateCityError} type="error" />
      )}

      <CityForm submit={submit} actionType="Update" data={cities.city} />
    </CityFormLayout>
  );
});

export default UpdateCityFrom;
