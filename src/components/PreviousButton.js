import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

function PreviousButton() {
  const { index } = useQuiz();

  if (index === 0) return;
  return <Button actionType="previousQuestion">Previous</Button>;
}

export default PreviousButton;
