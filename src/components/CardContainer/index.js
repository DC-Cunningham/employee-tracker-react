import React from "react";
import EmployeeCardList from "../EmployeeCardList";
import "./style.css";

function CardContainer() {
  return (
    <div className="card-deck">
      <EmployeeCardList />
    </div>
  );
}

export default CardContainer;
