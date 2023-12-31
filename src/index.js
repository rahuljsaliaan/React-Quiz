import React from "react";

import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { QuizProvider } from "./contexts/QuizContext";

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
