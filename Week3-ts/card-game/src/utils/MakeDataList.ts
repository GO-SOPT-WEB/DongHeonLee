import IMG_DATA from "../assets/index.js";

const shuffle = (array) => {
  let shuffleArray = array.sort(() => Math.random() - 0.5);
  return shuffleArray;
};

let randomList = shuffle([...IMG_DATA]);

export const EasyList = shuffle([
  ...randomList.slice(0, 5),
  ...randomList.slice(0, 5),
]);

export const NormalList = shuffle([
  ...randomList.slice(0, 7),
  ...randomList.slice(0, 7),
]);

export const HardList = shuffle([
  ...randomList.slice(0, 9),
  ...randomList.slice(0, 9),
]);
