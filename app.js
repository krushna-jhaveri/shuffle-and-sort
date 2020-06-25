
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle() {
    var allGridItems = document.querySelectorAll('.grid-item');

    var currentIndex = numArray.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = numArray[currentIndex];
        numArray[currentIndex] = numArray[randomIndex];
        allGridItems[currentIndex].innerHTML = numArray[randomIndex];
        numArray[randomIndex] = temporaryValue;
        allGridItems[randomIndex].innerHTML = temporaryValue;
    }
}

function sort() {
    this.numArray.sort();
    var allGridItems = document.querySelectorAll('.grid-item');
    for (var i = 0; i < allGridItems.length; i++) {
        allGridItems[i].innerHTML = this.numArray[i];
    }
}
