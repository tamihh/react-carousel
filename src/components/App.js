import React, { Fragment } from "react";
import { hot } from 'react-hot-loader'
import Home from 'Containers/Home';

const App = () => {
  return (
    <Fragment>
      <main>
        <Home/>
      </main>
    </Fragment>
  );
};

export default hot(module)(App)
