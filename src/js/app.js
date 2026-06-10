import { initHomeScreen } from "./screens/home.js";
import { initKeyboardControls } from "./services/keyboardService.js";
import { loadQuestions } from "./services/questionService.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadQuestions();
  initHomeScreen();
  initKeyboardControls();
});
