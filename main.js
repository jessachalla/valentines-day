// Set up variables here
let valentineRudy = {
    id: "valentine-1",
    name: "Rudy",
    message: "It'd be rude not to say happy Valentine's Day!",
};

let valentinePom = {
    id: "valentine-2",
    name: "Pomengranate",
    message: "You da POM! Happy Valentine's Day!",
};

let valentineSchmitty = {
    id: "valentine-3",
    name: "Schmitty",
    message: "We're schmitten with you, our Valentine!"
};

let valentineArray = [valentineRudy, valentinePom, valentineSchmitty];

function processValentines() {
    let n = 0;
    let i = n + 1;
    while (n < valentineArray.length) {
        document.getElementById(`valentine-${i}--name`).innerHTML = (`${valentineArray[n].name}`);
        document.getElementById(`valentine-${i}--message`).innerHTML = (`${valentineArray[n].message}`);
        n++;
        i++;
    }
}

processValentines()