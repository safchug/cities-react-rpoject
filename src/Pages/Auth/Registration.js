import { useContext } from "react";
import { Row, Col } from "antd";
import { observer } from "mobx-react-lite";

import StoreContext from "../../store/StoreContext";
import User from "../../models/User";
import RegistrationFrom from "../../Components/UI/RegistrationForm/RegistrationForm";
import CustomAlert from "../../Components/UI/CustomAlert";

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
            <RegistrationFrom submit={submit} />
          )}
          {auth.registrationStatus === "done" && (
            <CustomAlert
              type="success"
              message="You have been registered successfyly"
            />
          )}
          {auth.registrationStatus === "error" && (
            <RegistrationFrom submit={submit} error={auth.registrationResult} />
          )}
        </Col>
      </Row>
    </div>
  );
});

export default Registration;
