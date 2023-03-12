'use strict';

const userInput = document.querySelector("#userinput");
const userBtn = document.querySelector("#useraddbtn");
const userReset = document.querySelector("#userresetbtn");
const display = document.querySelector(".display");

userBtn.addEventListener("click", function () {
    const displayDiv = document.createElement('div');
    displayDiv.style.width = '80%';
    displayDiv.style.height = '12%';
    displayDiv.style.border = '1px solid black';
    displayDiv.style.display = 'flex';
    displayDiv.style.justifyContent = 'space-between';
    displayDiv.style.alignItems= 'center';
    displayDiv.style.flexDirection= 'column';
    displayDiv.style.lineHeight= '1.5';
    displayDiv.style.lineBreak = 'anywhere';
    displayDiv.style.padding = '10px';
    
    

   

   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('btn-f');
   deleteBtn.textContent = 'Delete'

   deleteBtn.addEventListener('click', function(){
    displayDiv.style.display = 'none';
   })

   


  const listEl = document.createElement("p");
  listEl.style.fontSize = '13px';
  listEl.style.lineBreak = 'anywhere';

 

  listEl.textContent = userInput.value;
  display.appendChild(displayDiv);
  displayDiv.appendChild(listEl);
  displayDiv.appendChild(deleteBtn);




  userReset.addEventListener('click', function() {
    display.removeChild(displayDiv);

})
userInput.value = ' '
});


