let questions = [];

export async function loadQuestions() {
  const response = await fetch("./data/questions.json");
  questions = await response.json();
  console.log("Questions chargées :", questions);
}

export function getQuestion(index) {
  return questions[index];
}

export function getQuestionCount() {
  return questions.length;
}