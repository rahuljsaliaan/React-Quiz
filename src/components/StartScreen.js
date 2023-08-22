import FilterQuestions from "./FilterQuestions";

function StartScreen({ level, numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>
        <strong>{numQuestions}</strong> Questions to test your react mastery
      </h3>
      <FilterQuestions dispatch={dispatch} level={level} />
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
