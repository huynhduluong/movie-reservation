import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminTemplate from "./containers/AdminTemplate";
import HomeTemplate from "./containers/HomeTemplate";
import LoginPage from "./containers/HomeTemplate/LoginPage";
import PageNotFound from "./containers/PageNotFound";
import { routesAdmin, routesHome } from "./routes";
import { connect } from "react-redux";
import { CHANGE_THEME_REQUEST } from "./components/NavbarHome/modules/constant";
import { useEffect } from "react";

function App(props) {
  const { themeStatus, handleChangeTheme } = props;

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("themeStatus"))) {
      handleChangeTheme(JSON.parse(localStorage.getItem("themeStatus")));
    } else {
      localStorage.setItem("themeStatus", JSON.stringify(false));
    }
  });

  const showLayout = (routes, text) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return text === "home" ? (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            theme={themeStatus}
            Component={item.component}
          />
        ) : (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        {showLayout(routesHome, "home")}
        {showLayout(routesAdmin, "admin")}

        <Route path="/dang-nhap" component={LoginPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    themeStatus: state.changeThemeReducer.themeStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  const action = (status) => ({
    type: CHANGE_THEME_REQUEST,
    payload: status,
  });

  return {
    handleChangeTheme: (status) => {
      dispatch(action(status));
      localStorage.setItem("themeStatus", JSON.stringify(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
