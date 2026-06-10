import { startTimer } from "./timerService.js";

import {
  nextQuestion,
  previousQuestion,
  revealAnswer,
  startCurrentQuestionTimer,
} from "./gameService.js";

export function initKeyboardControls() {
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Enter":
        console.log("Afficher la réponse");
        revealAnswer();
        break;

      case "ArrowRight":
        console.log("Question suivante");
        nextQuestion();
        break;

      case "ArrowLeft":
        console.log("Question précédente");
        previousQuestion();
        break;

      case " ":
        event.preventDefault();
        console.log("Démarrer le timer");
        startCurrentQuestionTimer();
        break;

      case "f":
      case "F":
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }

        break;
    }
  });
}
