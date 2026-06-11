import { renderTimerCircle } from "./timerCircle.js";

export function renderQuestionHeader(question) {
  document.getElementById("questionText").textContent = question.question;

  renderTimerCircle(question.difficultyPercent);
}
