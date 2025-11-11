import { boolean_array } from "../utils.js";
import { resultArray, save_result } from "../utils.js";
const questionsGrid = document.querySelector(".questionsGrid");
const questionsContainer = document.querySelector(".questions-js");
const displayBtn = document.querySelector(".displayBtn");
const notFound = document.querySelector(".notFound");
const category = document.querySelector(".topic");
const questionL = document.querySelector(".questionNum");
let questionsArray = [];
const amount = 10;
const categorie = 9;
const level = boolean_array[0].level;
let score = 0;
let clicked = 0;
async function fetchQuestions(a, c, d) {
  try {
    const URLBASE = `https://opentdb.com/api.php?amount=${a}&category=${c}&difficulty=${d}&type=boolean`;
    const response = await fetch(`${URLBASE}`);
    const result = await response.json();
    console.log(result.results);
    return result.results;
  }
  catch (error) {
    notFound.classList.remove("hide");
    questionsGrid.classList.add("hide");
  }
};

function displayQuestions(array) {
  if (array.length > 0) {
    questionsGrid.classList.remove("hide");
    notFound.classList.add("hide");
    let html = "";
    array.forEach((question) => {
      html += `<div class="question">
                <div class="currentQ"> 
                  <p>${question.question}</p>
                  <select class="answerPlate" data-correct-answer="${question.correct_answer}">
                    <option value="">----T/F----</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </select>
                </div>       
              </div>
     `;
    });
    questionsContainer.innerHTML = html;
    category.innerHTML = `Topic: ${array[0].category}`;
    questionL.innerHTML = `Questions: ${array.length}`;
    const answerPlate = document.querySelectorAll(".answerPlate");
    displayBtn.onclick = () => {
      clicked += 1;
      if (clicked > 1) {
        const perc = (score / array.length) * 100;
        resultArray.unshift({
          type: "boolean",
          correct: score,
          incorrect: array.length - score,
          percentage: perc
        });
        save_result();
        window.location.href = "../result/result.html";
      }
      else {
        displayBtn.innerHTML = "Show States";
        answerPlate.forEach((plate) => {
          const answer = plate.value;
          const correctAnswer = plate.dataset.correctAnswer;
          if (answer == correctAnswer) {
            plate.parentElement.classList.add("correct");
            score += 1;
          } else { plate.parentElement.classList.add("incorrect"); };
        });
      };
    };
  }
  else {
    notFound.classList.remove("hide");
    questionsGrid.classList.add("hide");
  }
};

async function init() {
  questionsArray = await fetchQuestions(amount, categorie, level);
  displayQuestions(questionsArray)
};
init();