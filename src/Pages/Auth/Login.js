import { Col, Row } from "antd";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import StoreContext from "../../store/StoreContext";
import LoginForm from "../../Components/LoginForm/LoginForm";

const Login = observer(() => {
  const { auth } = useContext(StoreContext);

  const history = useHistory();

  const submit = (e) => {
    auth.login(e);
  };

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="login">
      <Row justify="center" align="middle">
        <Col span="8">
          {auth.loginStatus === "pending" ? (
            <LoginForm submit={submit} />
          ) : (
            goHome()
          )}
        </Col>
      </Row>
    </div>
  );
});

export default Login;
