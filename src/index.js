import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Field from "./Field";

class App extends React.Component {
  state = {
    optItems: [1, 2, 3]
  };
  render() {
    return (
      <div className="App">
        <Field optItems={this.state.optItems} />
        Options
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
