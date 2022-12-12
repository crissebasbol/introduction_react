import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Here should be open a modal")}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
