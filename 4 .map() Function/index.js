// Exercise 1
const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function(item) {
    return `broken ${item}`;
}

// Wite the function .map
const makeBrokenList = function(listItem) { 
    return weapons.map(weapon => `broken ${weapon}`);
    // const map1 = array1.map(x => x * 2);
}

