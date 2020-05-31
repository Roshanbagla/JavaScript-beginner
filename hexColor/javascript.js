const btnColor = document.querySelector('.hexbtn');
const bgColor = document.querySelector('body');

var hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const hex = document.querySelector('.hex');

btnColor.addEventListener('click', getHex);

function getHex () {
    let hexCol = '#';
    for (let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()* hexNumbers.length);
        hexCol = hexCol + hexNumbers[random];
    }
    bgColor.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;

}