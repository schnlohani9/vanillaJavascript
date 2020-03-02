// Save data in local storage

localStorage.setItem("restaurant", "chipotle");

let game = {
  name: "Rocket League",
  release: 2015,
  developer: "Psyonix"
};
let gameJSON = JSON.stringify(game);
localStorage.setItem("game", gameJSON);

// Read data form local storage and
let restaurant = localStorage.getItem("restaurant");
console.log(restaurant);

let gameJSON = localStorage.getItem("game");
let game = JSON.parse(gameJSON);
console.log(game);
