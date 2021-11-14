// Data Structure to play with
const game = {
    'suspects' : [
        { 
            name: "miss",
            thing: "oui"
        },
        {
            name: "Mr",
            thing: "nan"
        }
    ],
    'murderer' : [
        {
        name: 'Jean',
        weapon: 'gun'
        },
        {
            name: 'Kill',
            weapon: 'Massue'
        }
    ]
}

// Loop throww throw the data
// Pour Loop dans l'objet suspects
game.suspects.forEach(element => {
    for (const property in element) {
        console.log(`${property}: ${element[property]}`);
      }
}); 


console.log(game.suspects.length);

game.suspects.forEach(element => console.log(element.name));

var colors = [];

game.suspects.forEach(element => {
    console.log(element);
    if(element === 'name') {
        colors.push(element);
    }
});

const jeux = [
    suspects = [
        {
        name : "jean",
        thing : "toi"
        }
    ],
    murderer = [
        {
        name: 'Jean',
        weapon: 'gun'
        },
        {
            name: 'Kill',
            weapon: 'Massue'
        }
    ]
]   

var gameLoop = function () {
    for(let i = 0; i < game.suspects.length; i++) {
        console.log('outter loop');
        for(let key in game.suspects[i]) { 
            console.log('inner loop');
            console.log(game.suspects[i][key]);
        }
    }
}

// Fonction pour créer un nouveau suspect
function createSuspectObject(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {console.log('My name is ' + name)}
    }
}

console.log(createSuspectObject("Jean Mark"));


// Liste des noms des suspects




// Liste des suspects