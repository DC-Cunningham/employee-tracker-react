import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Sorting({
  onSearch,
  searchTerm,
  handleSortByFirstName,
  handleSortByLastName,
  handleSortByDept,
}) {
  return (
    <Row>
      <Col size="6">
        <form>
          <input
            value={searchTerm}
            onChange={onSearch}
            className="w-100 form-control-lg"
            type="text"
            placeholder="search employee by first or last name"
          />
        </form>
      </Col>
      <Col size="6">
        <div>
          <strong>Sort by:</strong>
          <button
            onClick={handleSortByFirstName}
            className="btn btn-outline-dark"
          >
            First Name
          </button>
          <button
            onClick={handleSortByLastName}
            className="btn btn-outline-dark"
          >
            Last Name
          </button>
          <button onClick={handleSortByDept} className="btn btn-outline-dark">
            Department
          </button>
        </div>
      </Col>
    </Row>
  );
}

export default Sorting;
