const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
const slider = document.getElementById("myRange");
const colorPicker = document.getElementById('color-picker');
const eraserBtn = document.getElementById('eraser');


function defaultGrid(){
    return makeGrid(16); 
}

function makeGrid(size){
    gridContainer.style.setProperty('--grid-cols', size);
    gridContainer.style.setProperty('--grid-rows', size);

    for(let i=0; i<(size*size);i++){
        let gridItem = document.createElement('div');
        gridItem.className='grid-item';
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener('mouseenter', 
        
        function changeDivColor(){
            gridItem.style.setProperty('--color', colorPicker.value);
            if(eraserBtn.classList.contains('clicked')){
                gridItem.style.setProperty('--color', 'white');
            }

        });
    }
}



//adding event listeners
resetBtn.addEventListener('click', function(e){
    window.location.reload(true); 
});

window.addEventListener('load', defaultGrid);

slider.oninput = function setGridSize() {
    gridContainer.innerHTML='';
    let newSize = 65 - this.value;
    makeGrid(newSize);
  }
eraserBtn.addEventListener('click', ()=> {
    eraserBtn.classList.toggle("clicked");
})




