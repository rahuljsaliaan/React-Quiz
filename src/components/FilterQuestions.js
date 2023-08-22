function FilterQuestions({ level, dispatch }) {
  return (
    <div className="filter-questions">
      <h4>Select questions / difficulty</h4>
      <select
        value={level}
        onChange={(e) =>
          dispatch({ type: "selectLevel", payload: +e.target.value })
        }
      >
        <option value="0">All</option>
        <option value="1">level 1 (Easy)</option>
        <option value="2">level 2 (Medium)</option>
        <option value="3">level 3 (Hard)</option>
      </select>
    </div>
  );
}

export default FilterQuestions;
