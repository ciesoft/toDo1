import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

// COMPONENTS
import layoutWithHeader from "./layouts/layoutWithHeader";
import TasksList from "components/TaskLists";

// HELPERS
import RouteWrapper from "./Helpers/routeWrapper";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper
          path="/"
          component={TasksList}
          layout={layoutWithHeader}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
