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
    isOpen: false,
    text: ""
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      text: value
    });
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
          text={this.state.text}
          toggleOpen={this.toggleOpen}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          handleDeleteItem={this.handleDeleteItem}
          isOpen={this.state.isOpen}
        />

        {this.state.isOpen && (
          <Options
            text={this.state.text}
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
