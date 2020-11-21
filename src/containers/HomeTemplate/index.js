import React from "react";
import { Route } from "react-router-dom";
import FooterHome from "../../components/FooterHome";
import NavbarHome from "../../components/NavbarHome";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      {props.children}
      <FooterHome />
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
