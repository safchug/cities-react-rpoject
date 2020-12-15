import { useContext } from "react";
import { Row, Col } from "antd";
import { observer } from "mobx-react-lite";

import StoreContext from "../../../store/StoreContext";
import User from "../../../models/User";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import CustomAlert from "../../../Components/Alert/Alert";

const Registration = observer(() => {
  const { auth } = useContext(StoreContext);

  const submit = (e) => {
    const user = new User(e.name, e.mail, e.birthday, e.password);
    auth.register(user);
  };

  return (
    <div className="registraration">
      <Row justify="center" align="middle">
        <Col span="8">
          {auth.registrationStatus === "pending" && (
            <RegistrationForm submit={submit} />
          )}
          {auth.registrationStatus === "done" && (
            <CustomAlert
              type="success"
              message="You have been registered successfyly"
            />
          )}
          {auth.registrationStatus === "error" && (
            <RegistrationForm submit={submit} error={auth.registrationResult} />
          )}
        </Col>
      </Row>
    </div>
  );
});

export default Registration;
