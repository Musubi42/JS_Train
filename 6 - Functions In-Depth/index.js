// Array like object
const construcArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);
  arr.push("the billiards room ? ");
  return arr.join(" ");
};

construcArr("was", "it", "in");

//Projecting Data
const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

const isSuspectsPresent = videoData.filter(
  (suspect) => suspect.present === true
);

const suspectsNames = isSuspectsPresent.map((suspect) => suspect.name);

const ezSuspects = videoData.map((suspect) => {
  if (suspect.present === true) {
    return suspect.name;
  } else {
    // Comment faire pour ne rien mettre dans ezSuspects quand la fonction arrive ici
  }
});

// Can't use filter on the callback(?) (suspect)
//const ezySuspects = videoData.map((suspect) => {
//  suspect.filter((suspect) => suspect.present === true);
//});

//Comment faire une fonction self called
// Tuple
//(a = "It",b = "be",c = "could",d = "anyone") => ({
//  console.log([
//    [arguments[1], arguments[2]],
//    [arguments[4], arguments[3]],
//  ])
//})();

// Spread operator
const createTupleSpread = (a, b, c, ...d) => {
  return console.log([
    [a, d],
    [c, b],
  ]);
};

createTupleSpread("It", "be", "could", "anyone", "to");

// Faire un tour sur Mokka
const errFunction = () => {
  console.lag();
};

callFunction();

const callFunction = () => {
  console.log("J'suis une fonction");
};
