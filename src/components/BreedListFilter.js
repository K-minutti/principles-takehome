import React from "react";

const BreedListFilter = (props) => {
  const { filterList } = props;
  return (
    <form className="listFilterForm">
      <h2>Breeds</h2>
      <input
        type="text"
        id="searchFilter"
        onChange={filterList}
        placeholder="Filter list by name, country..."
      />
    </form>
  );
};

export default BreedListFilter;
