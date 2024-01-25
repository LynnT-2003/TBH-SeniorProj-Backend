import React, { Component } from "react";

class CustomDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.value || "", // Initialize selectedValue from props
    };
  }

  dropDownChanged(e) {
    const selectedValue = e.target.value;
    this.setState({ selectedValue }, () => {
      // Callback to pass the selectedValue to the parent component
      if (this.props.onChange) {
        this.props.onChange(selectedValue);
      }
    });
  }

  dropDownComp() {
    const { selectedValue } = this.state;

    return (
      <div>
        {selectedValue === "custom" ? (
          <input
            type="text"
            value={this.props.customValue || ""}
            onChange={(e) => this.props.onCustomValueChange(e.target.value)}
          />
        ) : (
          <select
            value={selectedValue}
            onChange={(e) => this.dropDownChanged(e)}
          >
            <option value="1">This is a small note</option>
            <option value="2">This is a medium note</option>
            <option value="3">This is a large note</option>
            <option value="custom">Type Your own</option>
          </select>
        )}
      </div>
    );
  }

  render() {
    return <div>{this.dropDownComp()}</div>;
  }
}

export default CustomDropDown;
