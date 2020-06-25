
var numArray = [[1, 'color-one'], [2, 'color-two'], [3, 'color-three'], [4, 'color-two'], [5, 'color-three'], [6, 'color-four'], [7, 'color-four'], [8, 'color-one'], [9, 'color-three']];

function shuffle() {
    var allGridItems = document.querySelectorAll('.grid-item');
    var currentIndex = numArray.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = numArray[currentIndex];
        numArray[currentIndex] = numArray[randomIndex];
        allGridItems[currentIndex].innerHTML = numArray[randomIndex][0];
        allGridItems[currentIndex].className = 'grid-item ' + numArray[randomIndex][1];
        numArray[randomIndex] = temporaryValue;
        allGridItems[randomIndex].innerHTML = temporaryValue[0];
        allGridItems[randomIndex].className = 'grid-item ' + temporaryValue[1];
    }
}

function sort() {
    this.numArray.sort();
    var allGridItems = document.querySelectorAll('.grid-item');
    for (var i = 0; i < allGridItems.length; i++) {
        allGridItems[i].innerHTML = this.numArray[i][0];
        allGridItems[i].className = 'grid-item ' + numArray[i][1];
    }
}
