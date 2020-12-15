import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopNavigation from "./Components/Menu/TopNavigation";
import routerParams from "./config/router.config";

import StoreContext from "./store/StoreContext";
import Auth from "./store/Auth";
import Cities from "./store/Cities";

import "./App.css";

function App() {
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
