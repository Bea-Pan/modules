/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

 
  domElement.style.color = `rgb(${r}, ${g}, ${b})`;

  
}

function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}
 
export { toggleHiddenElement, changeToFunkyColor, changeText };

/*Let’s briefly break down how this module works:

The function toggleHiddenElement() is declared. It accepts a domElement as an input and either shows or hides that element depending on its current display style value.

A new function changeToFunkyColor() is declared. It accepts a domElement as an input and then sets its background color to a random rgb() color value.

The two functions are exported using the ES6 export statement. */