import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CloseIcon from "@material-ui/icons/Close";

function Field(props) {
  const {
    optItems,
    handleChange,
    handleDelete,
    handleDeleteItem,
    toggleOpen,
    text,
    isOpen
  } = props;

  return (
    <div className="field flexbox align-center justify-between">
      <span className="flexbox align-center">
        <div className="flexbox align-center wrap">
          {optItems.map(
            (optItem, idx) =>
              optItem.checked && (
                <span key={idx} className="flexbox align-center">
                  {optItem.value}
                  <IconButton
                    size="small"
                    onClick={handleDeleteItem(optItem.value)}
                  >
                    <CloseIcon />
                  </IconButton>
                </span>
              )
          )}
        </div>
        <input
          type="text"
          size="30"
          placeholder="search"
          onChange={handleChange}
          value={text}
        />
      </span>

      <span className="flexbox align-center">
        <IconButton aria-label="Add an alarm" size="small" onClick={toggleOpen}>
          {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>

        <IconButton
          aria-label="Add an alarm"
          size="small"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </span>
    </div>
  );
}
export default Field;
