let timerRunning = false;
let intervalId = null;

const CIRCLE_LENGTH = 276;

export function startTimer(duration = 30) {
  if (timerRunning) {
    return;
  }

  const progressCircle = document.querySelector(".timer-progress");

  if (!progressCircle) {
    console.error("Cercle du timer introuvable");
    return;
  }

  timerRunning = true;

  let remaining = duration;

  intervalId = setInterval(() => {
    remaining--;

    const ratio = remaining / duration;
    const offset = CIRCLE_LENGTH * (1 - ratio);

    progressCircle.style.strokeDashoffset = offset;

    if (remaining <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      timerRunning = false;

      progressCircle.style.strokeDashoffset = CIRCLE_LENGTH;

      console.log("Temps écoulé");
    }
  }, 1000);
}

export function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  timerRunning = false;
}

export function resetTimer() {
  stopTimer();

  const progressCircle = document.querySelector(".timer-progress");

  if (progressCircle) {
    progressCircle.style.strokeDashoffset = 0;
  }
}