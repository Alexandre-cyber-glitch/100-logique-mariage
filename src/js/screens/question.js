export function showQuestion(question) {
  if (!question) {
    console.error("Question introuvable");
    return;
  }

  // Titre
  document.getElementById("questionTitle").textContent = question.title;

  // Pourcentage
  document.getElementById("difficultyPercent").textContent =
    `${question.difficultyPercent}%`;

  // Question
  document.getElementById("questionText").textContent = question.question;

  // Réponses
  const answersDiv = document.getElementById("answers");

  answersDiv.innerHTML = "";

  if (question.choices) {
    question.choices.forEach((choice, index) => {
      const answerElement = document.createElement("div");

      answerElement.classList.add("answer");

      answerElement.innerHTML = `<strong>${String.fromCharCode(65 + index)}</strong> - ${choice}`;

      answersDiv.appendChild(answerElement);
    });
  }
}
