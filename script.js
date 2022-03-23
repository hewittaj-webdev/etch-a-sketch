
// This function creates a grid with # x # size 
function createGrid(size){
    // Create a body variable to place divs 
    const boxesDiv = document.getElementById('boxes-div')

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


// Create grid
createGrid(40);