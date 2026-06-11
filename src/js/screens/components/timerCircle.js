export function renderTimerCircle(percent) {
  const timerCircle = document.getElementById("timerCircle");

  timerCircle.innerHTML = `
    <svg id="timerSvg" viewBox="0 0 100 100">
      <circle class="timer-bg" cx="50" cy="50" r="44"></circle>
      <circle class="timer-progress" cx="50" cy="50" r="44"></circle>
    </svg>

    <div id="difficultyPercent">${percent}%</div>
  `;
}
