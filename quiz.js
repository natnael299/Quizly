function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index 0 ≤ j ≤ i
    [array[i], array[j]] = [array[j], array[i]];   // swap elements
  }
  return array;
}

const amount = 20;
const category = 10;
const difficulty = "easy";
const type = "multiple";
let questionCount = 0;

async function answer(a, c, d, t) {
  const URLBASE = `https://opentdb.com/api.php?amount=${a}&category=${c}&difficulty=${d}&type=${t}`;
  const response = await fetch(`${URLBASE}`);
  const result = await response.json();
  const questions = result.results;
  //console.log(questions[questionCount]);
  displayQuestions(questions[questionCount], questions.length);
}

answer(amount, category, difficulty, type);

function displayQuestions(question, totalQLength) {
  let options = question.incorrect_answers;
  const Answer = question.correct_answer;
  options.push(Answer);
  options = shuffle(options);
  const optionGrid = displayOptions(options);
  const html = `
    <h2>Quizly</h2>
    <div class="infoGrid">
      <p class="topic">Topic: ${question.category}</p>
      <div class="questionNum">
        <span>${count + 1}</span> of <span>${totalQLength}</span>
      </div>
    </div>
    <div class="question">${question.question}</div>
    
    <div class="options">
      ${optionGrid}
    </div>
    <button class="nextBtn">Next question</button>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
  `;
  console.log(document.querySelector(".nextBtn"));
  document.querySelector(".container").innerHTML = html;
  document.querySelector(".nextBtn").addEventListener("click", () => {
    questionCount += 1;
    if (questionCount === totalQLength) { console.log("Done"); }
    else { answer(amount, category, difficulty, type) };
  });
}

function displayOptions(options) {
  let html = "";
  options.forEach((option) => {
    html += `
        <div class="option">${option}</div>
    `;
  });
  return html;
};