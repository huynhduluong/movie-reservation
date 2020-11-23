import React from "react";
import { Route } from "react-router-dom";
import FooterHome from "../../components/FooterHome";
import NavbarHome from "../../components/NavbarHome";
import DarkTheme from "../../theme/DarkTheme";
import LightTheme from "../../theme/LightTheme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

function HomeLayout(props) {
  return (
    <div>
      <ThemeProvider theme={DarkTheme}>
        <NavbarHome />
        <CssBaseline />
        {props.children}
        <FooterHome />
      </ThemeProvider>
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
