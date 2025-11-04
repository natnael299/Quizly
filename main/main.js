import { save_to_storage_bool, save_to_storage_multi, choice_array, boolean_array } from "../utils.js";

const categories = [
  {
    name: "Television",
    img: "../categories_image/tv.svg",
    id: 14
  },
  {
    name: "Books",
    img: "../categories_image/books.svg",
    id: 10
  },
  {
    name: "Board Games",
    img: "../categories_image/board_game.svg",
    id: 16
  },
  {
    name: "Art",
    img: "../categories_image/art.svg",
    id: 25
  },
  {
    name: "Animals",
    img: "../categories_image/animals.svg",
    id: 27
  },
  {
    name: "Computers",
    img: "../categories_image/computers.svg",
    id: 18
  },
  {
    name: "Geography",
    img: "../categories_image/geo.svg",
    id: 22
  },
  {
    name: "General Knowledge",
    img: "../categories_image/general.svg",
    id: 9
  },
  {
    name: "Anime",
    img: "../categories_image/Anime.svg",
    id: 31
  },
  {
    name: "Maths",
    img: "../categories_image/maths.svg",
    id: 19
  },
  {
    name: "Video Games",
    img: "../categories_image/video_games.svg",
    id: 15
  },
  {
    name: "Vehicels",
    img: "../categories_image/vehicels.svg",
    id: 28
  },
  {
    name: "Science",
    img: "../categories_image/science.svg",
    id: 17
  },
  {
    name: "Politics",
    img: "../categories_image/politics.svg",
    id: 24
  },
  {
    name: "Mythology",
    img: "../categories_image/myth.svg",
    id: 20
  },
  {
    name: "Music",
    img: "../categories_image/music_2.svg",
    id: 12
  },
  {
    name: "Gadgets",
    img: "../categories_image/gadgets.svg",
    id: 30
  },
  {
    name: "Films",
    img: "../categories_image/films.svg",
    id: 11
  },
  {
    name: "Celebrities",
    img: "../categories_image/celebrities.svg",
    id: 26
  },
  {
    name: "Musicals",
    img: "../categories_image/musicals.svg",
    id: 13
  },
  {
    name: "Sports",
    img: "../categories_image/sport.svg",
    id: 20
  },
  {
    name: "Comics",
    img: "../categories_image/comics.svg",
    id: 29
  },
  {
    name: "cartoons & animations",
    img: "../categories_image/1.svg",
    id: 32
  },
  {
    name: "History",
    img: "../categories_image/history.svg",
    id: 23
  }
];

const container = document.querySelector(".subjectContainer");

let html = "";
categories.forEach((categorie) => {
  html += `
  <div class="category">
      <div class="img_container">
        <img src="${categorie.img}">
      </div>
      <h3 class="categoryName">${categorie.name}</h3>
      <div class="details">
        <select class="level">
          <option value="">--- Difficulty ---</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select class="format">
          <option value="">--- Format ---</option>
          <option value="multiple">Multiple</option>
          <option value="boolean">True/False</option>
        </select>
      </div>
      <button class="selectBtn" data-quiz-id=${categorie.id}>Select</button>
    </div>
  `;
});
container.innerHTML = html;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("selectBtn")) {
    const id = e.target.dataset.quizId;
    const card = e.target.closest(".category");
    const name = card.querySelector(".categoryName").innerHTML;
    const level = card.querySelector(".level").value;
    const format = card.querySelector(".format").value;
    if (format == "multiple") {
      choice_array.unshift({
        name: name,
        id: id,
        level: level,
        format: format
      });
      save_to_storage_multi();
      window.location.href = "../multiple_choice/choice.html";
    } else {
      boolean_array.unshift({
        name: name,
        id: id,
        level: level,
        format: format
      });
      save_to_storage_bool();
      window.location.href = "../True_False/T_F.html";
    }
  };
});