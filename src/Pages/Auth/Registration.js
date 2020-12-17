import { useContext } from "react";
import { Row, Col } from "antd";
import { observer } from "mobx-react-lite";

import StoreContext from "../../store/StoreContext";
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";
import Alert from "../../Components/Alert/Alert";

const Registration = observer(() => {
  const { auth } = useContext(StoreContext);

  const submit = (e) => {
    const user = {
      name: e.name,
      mail: e.mail,
      birthday: e.birthday,
      password: e.password,
    };
    auth.register(user);
  };

  return (
    <div className="registraration">
      <Row justify="center" align="middle">
        <Col span="8">
          <Alert
            status={auth.registrationStatus}
            message={auth.registrationResult}
          />
          <RegistrationForm submit={submit} />
        </Col>
      </Row>
    </div>
  );
});

export default Registration;
