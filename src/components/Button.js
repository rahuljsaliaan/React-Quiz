import { useQuiz } from "../contexts/QuizContext";

function Button({ actionType, children }) {
  const { dispatch } = useQuiz();

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: actionType })}
    >
      {children}
    </button>
  );
}

export default Button;
