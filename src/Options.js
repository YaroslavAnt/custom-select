import React from "react";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function Options(props) {
  return (
    <div className="options">
      {props.options
        .filter(optItem => optItem.value.includes(props.text))
        .map(option => {
          return (
            <div className="options__item">
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    onChange={props.handleCheck}
                    value={option.value}
                    checked={option.checked}
                  />
                }
                label={option.value}
              />
            </div>
          );
        })}
    </div>
  );
}

export default Options;
