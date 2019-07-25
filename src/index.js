import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Field from "./Field";
import Options from "./Options";

const actItems = ["honda", "mazda", "suzuki", "nissan", "toyota"];

class Multiselect extends React.Component {
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
    const { optItems, text, isOpen } = this.state;
    return (
      <div className="App">
        <Field
          optItems={optItems}
          text={text}
          isOpen={isOpen}
          toggleOpen={this.toggleOpen}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          handleDeleteItem={this.handleDeleteItem}
        />

        {this.state.isOpen && (
          <Options
            text={text}
            options={optItems}
            handleCheck={this.handleCheck}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Multiselect options={actItems} />, rootElement);
