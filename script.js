const gridContainer = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
const slider = document.getElementById("myRange");
const colorPicker = document.getElementById('color-picker');

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


        gridItem.addEventListener('mouseenter', 
        
        function changeDivColor(){
            gridItem.classList.add('colored');
            gridItem.style.setProperty('--color', colorPicker.value);

            colorPicker.oninput = function(){
            if(gridItem.classList.contains('colored')){
                gridItem.style.setProperty('--color', this.value)
            }
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

