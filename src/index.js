import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Field from "./Field";
import Options from "./Options";

const actItems = ["honda", "mazda", "suzuki", "nissan", "toyota"];

class App extends React.Component {
  state = {
    optItems: [...this.props.options].map(option => ({
      value: option,
      checked: false
    })),
    isOpen: false
  };
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleDelete = () => {
    this.setState({
      optItems: [...this.props.options].map(option => ({
        value: option,
        checked: false
      })),
      isOpen: false
    });
  };

  handleDeleteItem = value => () => {
    console.log(value);
    const newOptions = [...this.state.optItems].map(optItem => {
      return optItem.value === value ? { ...optItem, checked: false } : optItem;
    });
    this.setState({
      optItems: newOptions
    });
  };

  handleCheck = ({ target: { value, checked } }) => {
    const newOptions = [...this.state.optItems].map(optItem => {
      return optItem.value === value ? { ...optItem, checked } : optItem;
    });
    this.setState({
      optItems: newOptions
    });
  };

  render() {
    return (
      <div className="App">
        <Field
          optItems={this.state.optItems}
          toggleOpen={this.toggleOpen}
          handleDelete={this.handleDelete}
          handleDeleteItem={this.handleDeleteItem}
          isOpen={this.state.isOpen}
        />

        {this.state.isOpen && (
          <Options
            options={this.state.optItems}
            handleCheck={this.handleCheck}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App options={actItems} />, rootElement);
