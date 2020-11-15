var firstRandomNumber,
    secondRandomNumber;


document.getElementById("js-play-button").onclick = function() {
    refreshNumbers();
    changeTitleForWinner();
};

function refreshNumbers() {
    firstRandomNumber = getRandomNumber(6);
    secondRandomNumber = getRandomNumber(6);

    document.getElementById("js-img-1").src = getImgUrlByNumber(firstRandomNumber);
    document.getElementById("js-img-2").src = getImgUrlByNumber(secondRandomNumber);
}

function getRandomNumber(maxNumber) {
    return Math.floor((Math.random() * maxNumber) + 1);
}

function getImgUrlByNumber(number) {
    return "images/dice" + number + ".png";
}

function changeTitleForWinner() {
    if(firstRandomNumber > secondRandomNumber){
        document.getElementById("js-title").innerText = "First Player Wins";
    } else if(firstRandomNumber < secondRandomNumber) {
        document.getElementById("js-title").innerText = "Second Player Wins";
    } else {
        document.getElementById("js-title").innerText = "Draw!";
    }
}