const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
let slider = document.getElementById("myRange");
let output = document.getElementById("slider-value");


slider.oninput = function setGridSize() {
  gridContainer.innerHTML='';
  let newSize = 65 - this.value;
  makeGrid(newSize);
}


function defaultGrid(){
    return makeGrid(16); 
}

function makeGrid(size){
    gridContainer.style.setProperty('--grid-cols', size);
    gridContainer.style.setProperty('--grid-rows', size)
    for(let i=0; i<(size*size);i++){
        let gridItem = document.createElement('div');
        gridItem.className='grid-item';
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener('mouseenter', function changeDivColor(){
            gridItem.classList.add('colored');
        });
    }
}



//adding event listeners
resetBtn.addEventListener('click', function(e){
    window.location.reload(true); 
});
window.addEventListener('load', defaultGrid);

