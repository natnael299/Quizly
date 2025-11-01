const categories = [
  {
    name: "Television",
    img: "categories_image/tv.svg"
  },
  {
    name: "Books",
    img: "categories_image/books.svg"
  },
  {
    name: "Board Games",
    img: "categories_image/board_game.svg"
  },
  {
    name: "Art",
    img: "categories_image/art.svg"
  },
  {
    name: "Animals",
    img: "categories_image/animals.svg"
  },
  {
    name: "Computers",
    img: "categories_image/computers.svg"
  },
  {
    name: "Geography",
    img: "categories_image/geo.svg"
  },
  {
    name: "General Knowledge",
    img: "categories_image/general.svg"
  },
  {
    name: "Anime",
    img: "categories_image/Anime.svg"
  },
  {
    name: "Maths",
    img: "categories_image/maths.svg"
  },
  {
    name: "Video Games",
    img: "categories_image/video_games.svg"
  },
  {
    name: "Vehicels",
    img: "categories_image/vehicels.svg"
  },
  {
    name: "Science",
    img: "categories_image/science.svg"
  },
  {
    name: "Politics",
    img: "categories_image/politics.svg"
  },
  {
    name: "Mythology",
    img: "categories_image/myth.svg"
  },
  {
    name: "Music",
    img: "categories_image/music_2.svg"
  },
  {
    name: "Gadgets",
    img: "categories_image/gadgets.svg"
  },
  {
    name: "Films",
    img: "categories_image/films.svg"
  },
  {
    name: "Celebrities",
    img: "categories_image/celebrities.svg"
  },
  {
    name: "Musicals",
    img: "categories_image/musicals.svg"
  }
];

const container = document.querySelector(".container");

let html = "";
categories.forEach((categorie) => {
  html += `
  <div class="category">
      <div class="img_container">
        <img src="${categorie.img}">
      </div>
      <h3>${categorie.name}</h3>
      <div class="details">
        <select name="level">
          <option value="">--- Difficulty ---</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select name="format">
          <option value="">--- Format ---</option>
          <option value="multiple">Multiple</option>
          <option value="boolean">True/False</option>
        </select>
      </div>
      <button>Select</button>
    </div>
  `;
});
container.innerHTML = html;