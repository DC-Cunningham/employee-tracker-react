import React from "react";

function EmployeeCard({ firstName, lastName, department, role, salary }) {
  return (
    <div className="card text-center">
      <h4 className="card-title">
        {firstName} {lastName}
      </h4>
      <p>Department: {department}</p>
      <p>Role: {role}</p>
      <p>Salary: ${salary}</p>
    </div>
  );
}

export default EmployeeCard;
