const underscore = require("underscore");

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak: function () {
      console.log("My name is " + name);
    },
  };
}

var suspects = {
  "Miss Scarlet": "Miss Scarlette",
  "Colonel Mustard": "Colonel Mustard",
  "Mr. White": "Mr. White",
};

// 'Miss Scarlet', 'Colonel Mustard', 'Mr. White'

//var missScarlet = CreateSuspectObjects(suspects["Miss Scarlet"]);

missScarlet.speak();

// Hydratation
const listSuspects = [];

for (property in suspects) {
  listSuspects.push(CreateSuspectObjects(suspects[property]));
}

function logger(value) {
  console.log(value);
}

// listSuspects.forEach(e => console.log(e));

listSuspects.forEach((e) => {
  for (property in e) {
    logger(listSuspects[0][property]);
    console.log(`${property}: ${listSuspects[0][property]}`);
  }
});

function oui() {
  _.each(suspects, (name) => {
    listSuspects.push(CreateSuspectObjects(name));
  });
}
