import React from "react";

function Field(props) {
  return (
    <div className="field flexbox align-center">
      <div className="flexbox">
        {props.optItems.map(optItem => {
          return <div>{optItem}</div>;
        })}
      </div>
      <input type="text" />
    </div>
  );
}

export default Field;
