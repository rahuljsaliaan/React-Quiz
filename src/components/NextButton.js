import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

function NextButton() {
  const { index, numQuestions, answer } = useQuiz();

  const ansIndex = answer.at(index);
  if (ansIndex === undefined) return;

  if (index < numQuestions - 1)
    return <Button actionType="nextQuestion">Next</Button>;

  if (index === numQuestions - 1)
    return <Button actionType="finish">Finish</Button>;
}

export default NextButton;
