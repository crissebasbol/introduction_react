import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = () => {
    alert("Here should be open a modal");
  };

  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
