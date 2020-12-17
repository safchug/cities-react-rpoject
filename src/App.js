import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopNavigation from "./Components/Menu/TopNavigation";
import routerParams from "./config/router.config";

import StoreContext from "./store/StoreContext";
import Auth from "./store/Auth";
import Cities from "./store/Cities";

import "./App.css";
import ProtectedRoute from "./Components/Route/ProtectedRoute";

const App = () => {
  return (
    <div className="App">
      <StoreContext.Provider
        value={{
          auth: new Auth(),
          cities: new Cities(),
        }}
      >
        <BrowserRouter>
          <TopNavigation />
          <Switch>
            {routerParams.map((param) => {
              if (param.protected) return <ProtectedRoute param={param} />;

              return (
                <Route
                  path={param.path}
                  component={param.component}
                  exact={param.exact}
                />
              );
            })}
          </Switch>
        </BrowserRouter>
      </StoreContext.Provider>
    </div>
  );
};

export default App;
