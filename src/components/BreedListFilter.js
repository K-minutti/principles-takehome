import React from "react";

const BreedListFilter = (props) => {
  const { filterList } = props;
  return (
    <form>
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
