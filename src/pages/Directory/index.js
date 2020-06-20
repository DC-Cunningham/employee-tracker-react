import React, { useState } from "react";
import Container from "../../components/Container";
import Sorting from "../../components/Sorting";
import EmployeeCardList from "../../components/EmployeeCardList";
import employees from "../../utils/employee-info.json";

function Directory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [data, setEmployees] = useState(employees);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleSortByFirstName() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.first_name > b.first_name ? 1 : -1)));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.first_name > b.first_name ? -1 : 1)));
      setSorted(false);
    }
  }

  function handleSortByLastName() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.last_name > b.last_name ? 1 : -1)));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.last_name > b.last_name ? -1 : 1)));
      setSorted(false);
    }
  }

  function handleSortByDept() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.department > b.department ? 1 : -1)));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.department > b.department ? -1 : 1)));
      setSorted(false);
    }
  }

  const filteredEmployees = data.filter(
    (employee) =>
      employee.first_name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      employee.last_name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Container>
        <p className="mb-16 text-md">
          Search for an employee or sort by Name and Department
        </p>
        <Sorting
          onSearch={handleSearchTerm}
          searchTerm={searchTerm}
          handleSortByFirstName={handleSortByFirstName}
          handleSortByLastName={handleSortByLastName}
          handleSortByDept={handleSortByDept}
        />
        <EmployeeCardList data={filteredEmployees} />
      </Container>
    </div>
  );
}

export default Directory;
