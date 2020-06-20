import React from "react";
import EmployeeCardList from "../EmployeeCardList";
import "./style.css";

function CardContainer() {
  return (
    <div className="jumbotron card-container">
      <EmployeeCardList />
    </div>
  );
}

export default CardContainer;
