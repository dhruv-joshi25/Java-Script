const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const violet = document.querySelector(".violet");
const purple = document.querySelector(".purple");
const yellow = document.querySelector(".yellow");



const getBGColor = ( selcetedElemnet ) => {
        
    return window.getComputedStyle(selcetedElemnet).backgroundColor;
}

console.log(getBGColor(yellow));