import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, Fragment } from "react";
import StoreContext from "../../store/StoreContext";

const CustomMenu = observer(() => {
  const { auth } = useContext(StoreContext);

  useEffect(() => {
    auth.checkUser();
  }, []);

  const logOut = (e) => {
    auth.logOut();
  };

  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="logo">
        <NavLink exact to="/">
          Cities Service
        </NavLink>
      </Menu.Item>
      {auth.user ? (
        <Fragment>
          <Menu.Item key="logout" className="menu_right" onClick={logOut}>
            Log out
          </Menu.Item>
          <Menu.Item key="user" className="menu_right">
            {auth.user.name}
          </Menu.Item>
        </Fragment>
      ) : (
        <Fragment>
          <Menu.Item key="login" className="menu_right">
            <NavLink exact to="/login">
              Log in
            </NavLink>
          </Menu.Item>
          <Menu.Item key="logout" className="menu_right">
            <NavLink exact to="/registration">
              Sign in
            </NavLink>
          </Menu.Item>
        </Fragment>
      )}
    </Menu>
  );
});

export default CustomMenu;
