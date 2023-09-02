import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  level: 0,
  answer: [],
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
};

const API_KEY = "$2b$10$irYLZBjxwe50Mepn.GukxuchuufY.N/KdwfP/aGkSLm1OX.rtb7He";
const BIN_URL = "https://api.jsonbin.io/v3/b/";
const BIN_ID = "64e4ec7d8e4aa6225ed3d0f2";
const SECS_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...initialState, level: state.level };

    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "selectLevel":
      return { ...state, level: action.payload };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions?.length * SECS_PER_QUESTION,
      };

    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: [...state.answer, action.payload],
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1 };

    case "previousQuestion":
      return { ...state, index: state.index - 1 };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Invalid action...!");
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      index,
      level,
      answer,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions?.length;
  const maxPossiblePoints = questions?.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(
    function () {
      (async function () {
        try {
          dispatch({ type: "loading" });

          const response = await fetch(`${BIN_URL}${BIN_ID}/latest`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Master-Key": API_KEY,
            },
          });

          const data = await response.json();

          const filteredData = data?.record?.questions.filter((data) =>
            level > 0 ? data.points === level * 10 : data.points
          );
          dispatch({ type: "dataReceived", payload: filteredData });
        } catch (error) {
          console.error(error);
        }
      })();
    },
    [level, dispatch]
  );

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        level,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error("Quiz context is being used outside the Quiz Provider...!");
  return context;
}

export { QuizProvider, useQuiz };
