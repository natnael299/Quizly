import { boolean_array } from "../utils.js";

const questionsGrid = document.querySelector(".questionsGrid");
const questionsContainer = document.querySelector(".questions-js");
const container = document.querySelector(".container");
const notFound = document.querySelector(".notFound");

let questionsArray = [];
const amount = 10;
const categorie = 9;
const level = boolean_array[0].level;
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
      <div class="currentQ"> ${question.question}</div>     
          <select>
            <option value="">----T/F----</option>
            <option value="">True</option>
            <option value="">False</option>
          </select>
        </div>
     `;
    });
    questionsContainer.innerHTML = html;
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