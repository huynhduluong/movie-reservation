import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminTemplate from "./containers/AdminTemplate";
import HomeTemplate from "./containers/HomeTemplate";
import LoginPage from "./containers/HomeTemplate/LoginPage";
import PageNotFound from "./containers/PageNotFound";
import { routesAdmin, routesHome } from "./routes";
import { connect } from "react-redux";

function App(props) {
  const { themeStatus } = props;
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

export default connect(mapStateToProps)(App);
