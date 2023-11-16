
// ---Add board button
let addBoard = document.querySelector('.add_board');
addBoard.addEventListener('click', () => {
    createForm();
});

// ----craete board input field ------
let container_main = document.querySelector('.container');
function createForm() {
    let div_board = document.createElement('div');
    div_board.classList.add('board');
    let div = document.createElement('div');
    div.classList.add('add_board');
    let form = document.createElement('div');
    form.classList.add('custom-input');
    div.innerHTML = `<input type="text" class="custom-input-value" id="boardName" placeholder="Enter Board Name">
    <div class="custom-input-foot">
     <button class="add_btn"type="submit">Add</button>
     <p class="close">X</p>
     </div>`;
    addBoard.remove();
    div.appendChild(form);
    div_board.appendChild(div);
    container_main.appendChild(div_board);

    // --init element of delete and add buttons
    addBoardNameBtn();
    boardName();
    deleteBoard();
    deleteCard();
}

function addBoardNameBtn() {
    let add_btns = document.querySelectorAll('.add_btn');
    add_btns.forEach((ele, idx) => {
        console.log(ele, idx);
        add_btns[idx].addEventListener('click', submitForm)
    });

    function submitForm() {
        setTimeout(createNewBoard(), 2000);
        console.log("create board called");
        addingForm();
        deleteBoard();
        deleteCard();
        closeForm();
    }
}
addBoardNameBtn();

// add board
let countCard = 0;
let container = document.querySelector('.container');
function createNewBoard() {
    let board = document.createElement('div');
    board.classList.add('board');
    let boardin = document.createElement('div');
    boardin.classList.add('board-in');
    let addBoard_ele = document.querySelector('.add_board');
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    div.classList.add('board-head');
    div.innerHTML = `<p class="board-card-title">${enteredBoardName} <span class="count">${countCard}</span></p>
                              <div class="board-more-btn">...
                              <button class="delete-btn board_delete_btn">Delete Board</button>
                              </div>     
                              `;

    addBoard_ele.parentElement.remove();
    div1.classList.add('custom-input');
    div1.innerHTML = `<div class="board-add-card">+ Add Card</div>
`;
    boardin.appendChild(div);
    boardin.appendChild(div1);
    board.appendChild(boardin);
    container.appendChild(board);
    console.log("board created");
    closeForm();
};

//-----------------------Adding cards------------------------


function addCard_btn() {
    let addCardsButns = document.querySelectorAll('.addBtn_cards');
    addCardsButns.forEach((addBtn) => {
        addBtn.addEventListener('click', (e) => {
            createNewCard(e.target.parentElement.parentElement.parentElement.parentElement.parentElement);
            addBtn.parentElement.parentElement.remove();
        })
    })
}

// created Card

function createNewCard(ele) {
    let div = document.createElement('div');
    div.classList.add('board-card');
    div.innerHTML =
        `
    <div class="card" draggable="true">
    <div class="card-top">
        <div class="card-top-labels" ><label style="background-color: rgb(207, 97, 161);"></label>
        </div>
        <div class="card-top-more">...
        <button class="delete-btn card_delete_btn">Delete Card</button>
        </div>
    </div>
    <div class="card-title">${enteredCardName}</div>
    <div>
        <p title="Task1 Detail Description"><span class="material-symbols-outlined">
                format_list_bulleted
            </span></p>
    </div>
    <div class="card-footer">
        <p class="card-footer-item"></p>
        <p class="card-footer-item"></p>
    </div> 
`;
    let div1 = document.createElement('div');
    div1.classList.add('custom-input');
    div1.innerHTML = `<div class="board-add-card">+ Add Card</div>`;
    div.appendChild(div1);

    if (ele.classList.contains('board')) {
        ele.children[0].appendChild(div);
    } else {
        ele.appendChild(div);
    }

    addingForm();
    more_icon();
    deleteCard();
    closeForm();
};



// ----------------create new board/card inputs updates-----------
// this is for input fields


let enteredBoardName;
function boardName() {
    let inText = document.querySelectorAll('.custom-input-value');
    inText.forEach((ele, idx) => {
        ele.addEventListener('keyup', debounce(function () {
            enteredBoardName = ele.value;
            console.log(ele.value);
        }, 1000));
    });
}

let enteredCardName;
function cardName() {
    let inText = document.querySelectorAll('.cardName');
    inText.forEach((ele, idx) => {
        ele.addEventListener('keyup', debounce(function () {
            enteredCardName = ele.value;
            console.log(ele.value);
        }, 1000));
    });
}
const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay);
    }
}

// on clk on Add
let add_btns = document.querySelectorAll('.add_btn');
// console.log(add_btns);




// ==>
// add car

function addingForm() {
    let addCard_btn = document.querySelectorAll(".board-add-card")
    addCard_btn.forEach((card) => {
        card.addEventListener('click', adding);
    });
}

addingForm();

function adding(e) {

    e.target.parentElement.innerHTML = `<div class="custom-input">
    <input type="text" class="cardName" placeholder="Enter Card Name ">
    <div class="custom-input-foot">
      <button type="submit" class="addBtn_cards">Add</button>
            <p class="close">X</p>
       </div>
    </div>`;
    addCard_btn();
    cardName();
    closeForm();
    deleteBoard();
    deleteCard();
}

function closeForm() {
    closeCards = document.querySelectorAll('.close')
    closeCards.forEach((card, idx) => {
        closeCards[idx].addEventListener('click', (e) => {
            e.target.parentElement.parentElement.parentElement.innerHTML = `<p class="board-add-card">+ Add Card</p>`;
            addCard_btn = document.querySelectorAll(".custom-input .board-add-card")
            addingForm();
        });
    });
}



// delete board
let delete_boards_menu = document.querySelectorAll('.board-more-btn');

delete_boards_menu.forEach((delete_btn) => {
    delete_btn.addEventListener('click', (event) => {
        event.stopPropagation();
        delete_btn.children[0].style.display = 'block';
        deleteBoard();
        let boards = document.querySelectorAll('.board');
        boards.forEach((board) => {
            board.addEventListener('click', (event) => {
                event.stopPropagation();
                delete_btn.children[0].style.display = 'none';
            });
        });
    })


});


function deleteBoard() {
    let deleteBoard_btns = document.querySelectorAll('.board_delete_btn');
    deleteBoard_btns.forEach((ele, idx) => {
        deleteBoard_btns[idx].addEventListener('click', (event) => {
            event.stopPropagation();
            deleteBoard_btns[idx].parentElement.parentElement.parentElement.parentElement.remove();

        })
    })
}

let delete_btns = document.querySelectorAll('.card-top-more');
delete_btns.forEach((delete_btn) => {
    delete_btn.addEventListener('click', () => {
        delete_btn.children[0].style.display = 'block';
        deleteCard();
    })
});
// delete cards
function deleteCard() {
    let deleteCard_btns = document.querySelectorAll('.card_delete_btn');
    deleteCard_btns.forEach((ele, idx) => {
        deleteCard_btns[idx].addEventListener('click', (event) => {
            event.stopPropagation();

            //    console.log( deleteCard_btns[idx].parentElement.parentElement.parentElement.innerHTML);;
            deleteCard_btns[idx].parentElement.parentElement.parentElement.remove();
        })
    })
}
// delete cards





// on mouse over
function more_icon() {
    let more_label = document.querySelectorAll('.card-top');
    let more = document.querySelectorAll('.card-top-more');

    more_label.forEach((btn, idx) => {
        btn.addEventListener('mouseenter', () => {
            more[idx].style.display = 'block';

        });
        btn.addEventListener('mouseleave', () => {
            more[idx].style.display = 'none';
        });
    });
}
more_icon();





//-=----------Update Card ------------
//fixed display

let title = document.querySelector('#title');
let desc = document.querySelector('.desc');
let date = document.querySelector('#date_board');
let label = document.querySelector('.label');
let task=document.querySelector('.task');

console.log(title,task,desc,date,label);
card_fixed_display();
let main = document.querySelector('.main');

function card_fixed_display() {
    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('click', dd);

    })
}

function dd(event){
    if(event.target.classList=='card'){
        main.style.display = "block";
        //label
        console.log(event.target.children[0].innerText);
        title.innerText=event.target.children[0].innerText;
        //title
        console.log(event.target.children[1].innerText);
        label.innerText= event.target.children[1].innerText;
        //date
        console.log(event.target.children[2].innerText);
        date.value=event.target.children[2].innerText;
        //desc
        console.log(event.target.children[3].innerText);
        task.innerText=event.target.children[3].innerText;

    }
   
}

main.addEventListener('click', (event) => {
        event.stopPropagation();
        main.style.display = "none";
});

// drag and drop
function allowDrop(ev) {
    ev.stopPropagation();
    ev.preventDefault();
}

function drag(ev) {
    ev.stopPropagation();
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
   console.log(ev.target.classList);
   if(ev.target.classList.contains("board-card")){
    ev.stopPropagation();
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
   }
   
}