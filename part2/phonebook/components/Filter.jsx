const Filter = ({filterText,handleFilterChange}) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with:{" "}
        <input
          placeholder="Write a name..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </form>
    </div>
  );
};

export default Filter;
