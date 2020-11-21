import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminTemplate from "./containers/AdminTemplate";
import HomeTemplate from "./containers/HomeTemplate";
import LoginPage from "./containers/HomeTemplate/LoginPage";
import PageNotFound from "./containers/PageNotFound";
import { routesAdmin, routesHome } from "./routes";

function App() {
  const showLayout = (routes, text) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return text === "home" ? (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
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

export default App;
