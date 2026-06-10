let timerRunning = false;

let intervalId = null;

export function startTimer(duration) {
  if (timerRunning) {
    return;
  }

  timerRunning = true;
  let remaining = duration;
  const timerElement = document.getElementById("timer");
  timerElement.textContent = remaining;
  intervalId = setInterval(() => {
    remaining--;
    timerElement.textContent = remaining;
    if (remaining <= 0) {
      clearInterval(intervalId);
      timerRunning = false;
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

export function resetTimer(duration = 30) {
  stopTimer();
  const timerElement = document.getElementById("timer");
  timerElement.textContent = duration;
}
