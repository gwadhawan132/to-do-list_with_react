import React from "react";

export default function TodoList(props) {
  //adding the cross/delete button in the list items

  return (
    <div className="papa-div">
      <button
        className="cross-button"
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        x
      </button>
      <li className="list-style">{props.text}</li>
    </div>
  );
}
