function PreviousButton({ index, dispatch }) {
  if (index === 0) return;
  return (
    <button
      onClick={() => dispatch({ type: "previousQuestion" })}
      className="btn btn-ui"
    >
      Previous
    </button>
  );
}

export default PreviousButton;
