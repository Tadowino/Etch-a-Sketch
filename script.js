document.addEventListener('DOMContentLoaded',function(){
    let select = document.querySelector('#select');
    select.addEventListener('click',function(){
    getSize();
    createBoard(16);
    })
})
function createBoard(size){
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    
    let numDivs = size * size;
    for(let i=0;i<numDivs;i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover',function(){
            div.style.backgroundColor = 'black';   
        })
        board.insertAdjacentElement('beforeend',div);
       
    }
}

function getSize(){
    let input = prompt("Enter your suitable size");
    let message = document.querySelector('#message');
    if(input == ""){
        message.innerHTML = "Please enter a size";
    }
    else if(input<0 || input>0){
        message.innerHTML = "Please enter a number between 1 and 100";
    }
    else{
        message.innerHTML ="now you can sketch!";
        return input;
    }
}
