import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopNavigation from "./Components/Menu/TopNavigation";
import routerParams from "./config/router.config";

import StoreContext from "./store/StoreContext";
import AuthService from "./store/AuthService";

import "./App.css";

function App() {
  return (
    <div className="App">
      <StoreContext.Provider value={{ auth: new AuthService() }}>
        <BrowserRouter>
          <TopNavigation />
          <Switch>
            {routerParams.map((param) => (
              <Route
                path={param.path}
                component={param.component}
                exact={param.exact}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
