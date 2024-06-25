let currMoleTile;


window.onload = function () {
    setGame ();
}

function setGame() {
    // grid for game board
    for (let i = 0; i < 9; i++) { // i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
}

function getRandomTile() {
    // math.random --> (0-1) * = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString(); 
}

function setMole() {

    let mole = documentCreateElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
}