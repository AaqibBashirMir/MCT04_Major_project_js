// add card

   let addCard=`<form action="" class="custom-input">
   <input type="text" id="cardName"  placeholder="Enter Card Name ">
   <div class="custom-input-foot">
     <button type="submit">Add</button>
           <p class="close">X</p>
   </div>
 </form>`;

let addCard_btn=document.querySelectorAll(".custom-input .board-add-card")
let closeCards;
function addingForm(){
addCard_btn.forEach((card) => {
    card.addEventListener('click', adding);
    // console.log(card);
});
}

addingForm()
function adding(e){
    e.target.parentElement.innerHTML =addCard;
    let input_box=document.querySelector('.input_card');
    console.log(input_box);
        closeForm();
}


function closeForm() {
    closeCards = document.querySelectorAll('.close')
    closeCards.forEach((card,idx) => {
        card.addEventListener('click',(e)=>{
            e.target.parentElement.parentElement.parentElement.innerHTML=`<p class="board-add-card">+ Add Card</p>`
            addCard_btn=document.querySelectorAll(".custom-input .board-add-card")
            addingForm();
        });
    });
}

//more option in card
let more_label = document.querySelectorAll('.card-top-labels');
let more = document.querySelectorAll('.card-top-more');
more_label.forEach((btn,idx) => {
    btn.addEventListener('mouseenter', (e) => {
     more[idx].style.display='block';
    });
    btn.addEventListener('mouseleave', () =>{
        more[idx].style.display='none';
});
});





// create elements
let creatLabel=``;
let card_boards = document.querySelectorAll('.board-card');
console.log(card_boards);
card_boards.forEach((board, idx) => {
    board.addEventListener('click',(e)=>{
        console.log(board,idx);
        let createParent= document.createElement('div');
        createParent.classList.add('show-card');
        createParent.innerHTML=``;
    })
  
})







