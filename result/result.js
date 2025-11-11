import { resultArray } from "../utils.js";
import { complimentFun } from "../utils.js";
const container = document.querySelector(".container");

container.innerHTML = `
<h2>Quizly</h2>
    <h3>Your result & stats</h3>
    <div class="states">
      <div class="correctA">${resultArray[0].correct} correct</div>
      <div class="incorrectA">${resultArray[0].incorrect} incorrect</div>
    </div>

    <div class="precentage">
      ${resultArray[0].percentage}%
    </div>
    <div class="message">${complimentFun(resultArray[0].percentage)}</div>
   <div class="footer">
    <button class='logoutBtn'>Logout</button>
    <button class='replayBtn'>Replay Quiz</button>
  </div>
`;

document.querySelector(".logoutBtn").addEventListener("click", () => {
  window.location.href = "../auth.login.php";
});

document.querySelector(".replayBtn").addEventListener("click", () => {
  window.location.href = "../main/main.html";
});