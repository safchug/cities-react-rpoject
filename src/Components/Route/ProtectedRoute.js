import { useContext } from "react";
import StoreContext from "../../store/StoreContext";
import { observer } from "mobx-react-lite";
import { Route } from "react-router-dom";
import Login from "../../Pages/Auth/Login";

const ProtectedRoute = observer(({ param }) => {
  const { auth } = useContext(StoreContext);

  return auth.user ? (
    <Route path={param.path} component={param.component} exact={param.exact} />
  ) : (
    <Route path={param.path} component={Login} exact={param.exact} />
  );
});

export default ProtectedRoute;
