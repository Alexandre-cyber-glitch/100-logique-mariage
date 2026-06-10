import { gameState } from "../state/gameState.js";
import { getQuestion } from "./questionService.js";
import { showQuestion } from "../screens/question.js";
import { startTimer } from "./timerService.js";

export function startGame() {
  gameState.currentQuestionIndex = 0;
  loadCurrentQuestion();
}
export function loadCurrentQuestion() {
  const question = getQuestion(gameState.currentQuestionIndex);
  showQuestion(question);
  gameState.questionState = "QUESTION";
}
export function nextQuestion() {
  gameState.currentQuestionIndex++;
  loadCurrentQuestion();
}
export function previousQuestion() {
  if (gameState.currentQuestionIndex > 0) {
    gameState.currentQuestionIndex--;
    loadCurrentQuestion();
  }
}

export function revealAnswer() {
  const question = getQuestion(gameState.currentQuestionIndex);
  const answers = document.querySelectorAll(".answer");
  answers[question.correctAnswer].classList.add("correct");
}

export function startCurrentQuestionTimer() {
  const question = getQuestion(gameState.currentQuestionIndex);
  startTimer(question.timer);
}
