import React, { Component } from "react";
import { Helmet } from "react-helmet";
import routes from "../routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Helmet>
        <main>{routes}</main>
      </div>
    );
  }
}

export default App;
