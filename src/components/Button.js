import { dispatch } from "../contexts/QuizContext";

function Button({ actionType, children }) {
  return (
    <button className="btn btn-ui" onClick={dispatch({ type: actionType })}>
      {children}
    </button>
  );
}

export default Button;
