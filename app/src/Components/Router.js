import React from "react";
import { PropsRoute } from "react-router-with-props";

const Router = props => {
  let routeChange = () => {};

  return props.routes.map((route, idx) => {
    return (
      <PropsRoute
        onChange={routeChange}
        key={idx}
        path={route.path}
        component={route.component}
        exact={route.exact}
        {...props}
      />
    );
  });
};

export default Router;
