// This function adds a listener to the reset button to set boxes back to default background color
function addResetButtonListener(){
    const resetButton = document.getElementById('reset-button');
    const boxes = document.getElementsByClassName('box');
    resetButton.addEventListener('click', () => {
        for(let box of boxes){
            box.style.backgroundColor = "#0096a3"
        };
        makeNewGrid();
    })
}

// This function checks to make sure number is between range
function checkNumber(num){
    // If num is between our range return true
    if(num >= 1 && num <= 100){
        return true;
    }
    // Otherwise return false
    return false;
}

// This function creates a grid with 'height' x 'width' size 
function createGrid(size){
    // Create a body variable to place divs 
    const boxesDiv = document.getElementById('boxes-div');

    for(let i = 0; i < size; i++){
        // Create a div to containe smaller boxes
        const div = document.createElement('div');
        div.classList.add(`box-row`);

        for(let j = 0; j < size; j++){
            // Create a box and add a class, then append child to the div
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover', () => {box.style.backgroundColor = "#292934"});
            div.appendChild(box);
        }

        // Add row of boxes
        boxesDiv.appendChild(div);
    }
}

// This function prompts the user for a new grid size after the reset button was pressed
function makeNewGrid(){
    let newSize = prompt('Pick a new grid size from 1-100!');

    // Detects if user presses cancel
    if(newSize === null){
        return;
    }
    
    let correctNum = checkNumber(newSize);

    if(correctNum){
        removeOldGrid();
        createGrid(newSize);
    }
    else{
        alert("Please pick a correct number.");
        makeNewGrid()
    }
}

// This function removes the old grid
function removeOldGrid(){
    const boxesDiv = document.getElementById("boxes-div");
    while(boxesDiv.firstChild){
        boxesDiv.removeChild(boxesDiv.firstChild);
    }
}


//Function calls
addResetButtonListener();
createGrid(100); // Sets a default grid to 100x100