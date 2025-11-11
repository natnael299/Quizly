import { choice_array } from "../utils.js";
import { resultArray, save_result } from "../utils.js";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index 0 ≤ j ≤ i
    [array[i], array[j]] = [array[j], array[i]];   // swap elements
  }
  return array;
};

const amount = 20;
const category = choice_array[0].id;
const difficulty = choice_array[0].level;
const type = "multiple";
let questionsArray = [];
let questionCount = 0;
let score = 0;

init();
async function init() {
  await answer(amount, category, difficulty, type);
  displayQuestions(questionsArray[questionCount], questionsArray.length);
};

async function answer(a, c, d, t) {
  const URLBASE = `https://opentdb.com/api.php?amount=${a}&category=${c}&difficulty=${d}&type=${t}`;
  const response = await fetch(`${URLBASE}`);
  const result = await response.json();
  const questions = result.results;
  questionsArray = questions;
  console.log(questionsArray);
};

function displayQuestions(question, totalQLength) {
  let options = question.incorrect_answers;
  const Answer = question.correct_answer;
  options.push(Answer);
  options = shuffle(options);
  const optionGrid = displayOptions(options, Answer);
  const html = `
    <h2>Quizly</h2>
    <div class="infoGrid">
      <p class="topic">Topic: ${question.category}</p>
      <div class="questionNum">
        <span>${questionCount + 1}</span> of <span>${totalQLength}</span>
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
  document.querySelector(".container").innerHTML = html;
  document.querySelector(".nextBtn").addEventListener("click", () => {
    questionCount += 1;
    if (questionCount === totalQLength) {
      const perc = (score / totalQLength) * 100;
      resultArray.unshift({
        type: "multiple",
        correct: score,
        incorrect: totalQLength - score,
        percentage: perc
      });
      save_result();
      window.location.href = "../result/result.html";
    }
    else { displayQuestions(questionsArray[questionCount], questionsArray.length); };
    const progressBar = document.querySelector(".progress");
    const width = (questionCount / totalQLength) * 100;
    progressBar.style.width = `${width}%`;
  });
};

function displayOptions(options, correctAnswer) {
  let html = "";
  options.forEach((option) => {
    html += `
        <div class="option">${option}</div>
    `;
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("option")) {
      const selectedAnswer = e.target.innerHTML;
      const options = document.querySelectorAll(".option");

      if (selectedAnswer !== correctAnswer) {
        e.target.classList.add("incorrect");
        options.forEach((option) => {
          const currentAnswer = option.innerHTML;
          if (currentAnswer === correctAnswer) {
            option.classList.add("correct");
          } else { option.classList.add("unanswered"); };
        });
      } else {
        e.target.classList.add("correct");
        score += 1;
        options.forEach((option) => {
          option.classList.add("unanswered");
        });
      };
    };
  });
  return html;
};