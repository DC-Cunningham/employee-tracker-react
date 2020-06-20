import React from "react";

function Sorting({
  onSearch,
  searchTerm,
  handleSortByFirstName,
  handleSortByLastName,
  handleSortByDept,
}) {
  return (
    <div className="">
      <form>
        <input
          value={searchTerm}
          onChange={onSearch}
          className=""
          type="text"
          placeholder="search employee by first or last name"
        />
      </form>
      <div className="">
        <button onClick={handleSortByFirstName} className="">
          First Name
        </button>
        <button onClick={handleSortByLastName} className="">
          Last Name
        </button>
        <button onClick={handleSortByDept} className="">
          Department
        </button>
      </div>
    </div>
  );
}

export default Sorting;
