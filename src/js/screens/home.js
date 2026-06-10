import { startGame, nextQuestion, previousQuestion, revealAnswer } from "../services/gameService.js";
import { startTimer } from "../services/timerService.js";

export function initHomeScreen() {


  startButton.addEventListener("click", () => {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";
    startGame();
  });

}
