import { renderQuestionHeader } from "./components/questionHeader.js";

export function showQuestion(question) {
  if (!question) {
    console.error("Question introuvable");
    return;
  }

  renderQuestionHeader(question);
  renderQuestionContent(question);
  renderChoices(question);
}

function renderQuestionContent(question) {
  const frame = document.getElementById("questionImageFrame");
  const image = document.getElementById("questionImage");

  frame.style.display = "none";
  image.removeAttribute("src");

  if (!question.content) {
    return;
  }

  if (question.content.type === "image") {
    image.src = question.content.value;
    image.alt = question.question;
    frame.style.display = "flex";
  }
}

function renderChoices(question) {
  const answersDiv = document.getElementById("answers");

  answersDiv.innerHTML = "";

  console.log("choices reçues :", question.choices);

  if (!question.choices || question.choices.length === 0) {
    console.error("Aucune réponse à afficher");
    return;
  }

  question.choices.forEach((choice, index) => {
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");

    const letter = String.fromCharCode(65 + index);

    if (choice.type === "text") {
      answerElement.innerHTML = `
    <span class="answer-letter">${letter}</span>
    <span class="answer-separator"></span>
    <span class="answer-text">${choice.value}</span>
  `;
    }

    if (choice.type === "image") {
      answerElement.innerHTML = `
    <span class="answer-letter">${letter}</span>
    <span class="answer-separator"></span>
    <img class="answer-image" src="${choice.value}" />
  `;
    }

    answersDiv.appendChild(answerElement);
  });
}
