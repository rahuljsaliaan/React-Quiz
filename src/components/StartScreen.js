import { useQuiz } from "../contexts/QuizContext";
import FilterQuestions from "./FilterQuestions";
import Button from "./Button";

function StartScreen() {
  const { numQuestions } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>
        <strong>{numQuestions}</strong> Questions to test your react mastery
      </h3>
      <FilterQuestions />
      <Button actionType="start">Let's Start</Button>
    </div>
  );
}

export default StartScreen;
