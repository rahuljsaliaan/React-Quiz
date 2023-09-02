import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 50 && percentage < 80) emoji = "🥉";
  if (percentage >= 0 && percentage < 50) emoji = "👍";
  if (percentage === 0) emoji = "📛";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({percentage.toFixed(2)}%)
      </p>
      <p className="highscore">(High-score {highscore} points)</p>
      <Button actionType="restart">Restart</Button>
    </>
  );
}

export default FinishScreen;
