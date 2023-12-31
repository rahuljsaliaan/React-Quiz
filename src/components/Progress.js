import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, maxPossiblePoints, points, answer } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer.length !== 0)}
        min={0}
      />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
