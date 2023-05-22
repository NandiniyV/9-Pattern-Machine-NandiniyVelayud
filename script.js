// if submit button pressed, then: 
function checkEntries() {
//clear the old grid
  gridofboxes.innerHTML = '';
  
  console.log("building a box")
const columns = numberthere2.value;
    // set number as number of columns in grid
// find out what color they put in the box 
const colors = colorbox.value; 
  console.log(colors)
    // set color as the color of the grid
// find out what number is in the first input number box
const rows = numberthere.value;
    // set number as number of rows in grid
// find out what number is in the second input number box 

for (let i=0; i<rows; i++) {
let newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.setAttribute('id', `row${i}`);
  gridofboxes.appendChild(newRow);

for (let j=0; j<columns; j++) {
let newBox = document.createElement('div');
  newBox.classList.add('box');
  newBox.setAttribute('id', `box0$(i)${j}`);
  newRow.appendChild(newBox);
  newBox.style.backgroundColor = colors;
  newBox.addEventListener("click", changeColor);
  newBox.addEventListener("mouseover", changeColor);
     } }
}

//function to change the color of a box when I click on it
function changeColor(event) {
  const newColor = colorbox.value;
  if (event.type == "click" || (event.type == "mouseover"&& event.buttons == 1)) {
  event.target.style.backgroundColor = newColor;
}}

// get element by id of input number box 1, 2, and color box
const numberthere = 
  document.getElementById("numberthere");
const numberthere2 = 
  document.getElementById("numberthere2");
const colorbox = 
  document.getElementById("colorbox");
const submitbutton = 
  document.getElementById("submitbutton");
const gridofboxes = 
  document.getElementById("gridofboxes");

submitbutton.addEventListener("click", checkEntries);