// import the functions here, then uncomment the code below

alert("sup")
import {changeText, changeToFunkyColor} from '../modules/dom-functions.js '

const header = document.getElementById("header");
const border = document.getElementById("border");


// call changeText here
changeText(header , 'I did it!')

setInterval(()=> {
  
  // call changeToFunkyColor() here
  changeToFunkyColor(header);
  
}, 200);

