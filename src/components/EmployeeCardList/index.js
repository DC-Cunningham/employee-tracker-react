import React from "react";
import EmployeeCard from "../EmployeeCard";

function EmployeeCardList({ data }) {
  return data.map((employee) => (
    <EmployeeCard
      key={employee.id}
      firstName={employee.first_name}
      lastName={employee.last_name}
      department={employee.department}
      role={employee.role}
      salary={employee.salary}
    />
  ));
}

export default EmployeeCardList;
