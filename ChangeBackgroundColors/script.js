const colorBtn = document.querySelector('.btn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998'];

colorBtn.addEventListener ('click', changeColor);

function changeColor () {
var random = Math.floor(Math.random() * colors.length)
bodyBcg.style.backgroundColor = colors[random];
}