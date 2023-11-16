const date = document.getElementById('date');

const currentDate = new Date();
date.innerHTML = `<span>Current Date:</span> ${currentDate.toLocaleDateString()}`

const AddFields = document.getElementById('AddFields');

//----------- Add Items----------
let itemCount = 2;

AddFields.addEventListener("click",()=>{
    const ItemCont = document.querySelector('.itemCont');
    const Items = document.createElement("div");
    const hr = document.createElement('hr')
    hr.id = "hr"+ itemCount;

    Items.classList = `items`
    Items.id = itemCount;
    Items.innerHTML = `
        <div class="data">
                <input type="text" class="Iname" placeholder="Item name">
                <input type="text" class="desc" placeholder="Item description">
        </div>
        <div class="input">
                <input type="number" min="1" value="1" id="qty" class="qty">
                <input type="text" id="currency" value="$" readonly>
                <input type="number" step="0.01" min="1.00" class="rate" value="1.00" id="rate">
                <button onclick="handleButtonClick(${itemCount},'hr${itemCount}')"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `
    ItemCont.appendChild(Items);
    ItemCont.appendChild(hr)
    itemCount++;
    updateTotal()
})

// ------Remove Items---------

function handleButtonClick(itemId,hrId){
    const RemoveItem = document.getElementById(itemId);
    const hrRemove = document.getElementById(hrId);

    RemoveItem.parentNode.removeChild(RemoveItem)
    hrRemove.parentNode.removeChild(hrRemove)
    updateTotal()
}

//------Calulation Section-----
const curreny = document.getElementById('currency');
let dis = document.getElementById('disPer');
const stotal = document.getElementById('subtotal');
const total = document.getElementById('total');
let selectCurr = document.getElementById('optionsCurr');

selectCurr.addEventListener('change',()=>{
    curreny.value = selectCurr.value
})

stotal.textContent = curreny.value + "1.00"
total.textContent = curreny.value + "1"
const discount = document.getElementById('discount')
discount.textContent = curreny.value + `${dis.value}`;

stotal.addEventListener('input',()=>{
    updateTotal()
})
dis.addEventListener('input',()=>{
    updateTotal()
})

function updateTotal(){
    const Items = document.querySelectorAll('.items')
    Items.forEach(item=>{
        let rate = item.querySelector('input:nth-child(3)')
        let quantity = item.querySelector('.qty')

        selectCurr.addEventListener('change',()=>{
            curreny.value = selectCurr.value
            // updateTotal()
        })

        dis.addEventListener('input',()=>{
            // const stotal = document.getElementById('subtotal');
            // const total = document.getElementById('total');
            // const discount = document.getElementById('discount')
            let Quantity = parseFloat(`${quantity.value}`)
            let rates = parseFloat(`${rate.value}`)
            let subtotal = rates * Quantity
            stotal.textContent = curreny.value + `${subtotal.toFixed(2)}`
            discount.textContent = curreny.value + `${dis.value}`;
            let Alltotal = parseFloat(subtotal - (subtotal * (dis.value/100)))
            total.textContent = curreny.value + `${Alltotal.toFixed(2)}`
        })

        rate.addEventListener('input',()=>{
            // const stotal = document.getElementById('subtotal');
            // const total = document.getElementById('total');
            // const discount = document.getElementById('discount')
            let Quantity = parseFloat(`${quantity.value}`)
            let rates = parseFloat(`${rate.value}`)
            let subtotal = rates * Quantity
            stotal.textContent = curreny.value + `${subtotal.toFixed(2)}`
            discount.textContent = curreny.value + `${dis.value}`;
            let Alltotal = parseFloat(subtotal - (subtotal * (dis.value/100)))
            total.textContent = curreny.value + `${Alltotal.toFixed(2)}`
        })

        quantity.addEventListener('input',()=>{
            // const stotal = document.getElementById('subtotal');
            // const total = document.getElementById('total');
            // const discount = document.getElementById('discount')
            let Quantity = parseFloat(`${quantity.value}`)
            let rates = parseFloat(`${rate.value}`)
            let subtotal = rates * Quantity
            stotal.textContent = curreny.value + `${subtotal.toFixed(2)}`
            discount.textContent = curreny.value + `${dis.value}`;
            let Alltotal = parseFloat(subtotal - (subtotal * (dis.value/100)))
            total.textContent = curreny.value + `${Alltotal.toFixed(2)}`
        })
    })
}

// -----Review Invoice-----

function ReviewInvoice(){
    var container = document.querySelector(".mainContainer")
    var inputs = container.querySelectorAll('input[required]');

    for(var i=0;i<inputs.length;i++){
        if(!inputs[i].value){
            alert("Please fill in all required fields")
            return;
        }else{
            CreateModal()
        }
    }
}

//--Modal--
const main = document.getElementById('Main')
const Invoice = document.getElementById('invoiceN')
const butDiv = document.getElementById('butDiv')
const Download = document.getElementById('download')
const sendInv = document.getElementById('sendInv')

function CreateModal(){
    my_modal.showModal();

    const name = document.getElementById('name')
    const add = document.getElementById('address');
    const email = document.getElementById('email')

    const fname = document.getElementById('fname')
    const fadd = document.getElementById('fadd');
    const femail = document.getElementById('femail')

    const Items = document.querySelectorAll('.items')

    const duedate = document.getElementById('dueD');
    let table = document.createElement('table')
    const Tid = document.getElementById('total')

    main.innerHTML = `
        <div class="Topband">
            <div>
                <h1>${name.value}</h1>
                <h4>Invoice #: ${Invoice.value}</h4>
            </div>
            <h3>Amount Due: ${Tid.textContent}</h3>
        </div>

        <div class="Billdata">
            <div>
                <h5>Billed to:</h5>
                <span>${name.value}</span><br>
                <span>${add.value}</span><br>
                <span>${email.value}</span><br>
            </div>
            <div>
                <h5>Billed from:</h5>
                <span>${fname.value}</span><br>
                <span>${fadd.value}</span><br>
                <span>${femail.value}</span><br>
            </div>
            <div>
                <h5>Date of Issue:</h5>
                <span>${duedate.value}</span>
            </div>
        </div>
        `
    let Head = table.createTHead();
    let row = Head.insertRow(0);

    let h1 = row.insertCell(0);
    let h2 = row.insertCell(1);
    let h3 = row.insertCell(2);
    let h4 = row.insertCell(3);
    
    h1.innerHTML = "<b>QTY</b>"; 
    h2.innerHTML = "<b>DESCRIPTION</b>";
    h3.innerHTML = "<b>PRICE</b>";
    h4.innerHTML = "<b>AMOUNT</b>"

    Items.forEach(item=>{
        createTable(item,table)
    })
    
    Download.style.backgroundColor = 'white';
    Download.style.border = '1px solid #0D6EFD'
    sendInv.style.backgroundColor = '#0D6EFD';
    Download.style.width = '50vw'
    sendInv.style.width = '50vw'
    Download.style.height = '40px'
    sendInv.style.height = '40px'

    const TotalD = document.createElement('div');
    TotalD.classList = 'TotalB'

    // let amountD = amt();
    // console.log(amountD)

    TotalD.innerHTML = `
        <div></div>
        <div class=spanList>
            <div><span class="SubT">SUBTOTAL:</span> <span>${stotal.textContent}</span></div>
            <div><span class="DiscD">DISCOUNT:</span> <span>${discount.textContent}</span></div>
            <div><span class="Stotal">TOTAL:</span> <span>${Tid.textContent}</span></div>
        </div>
        `
    main.appendChild(TotalD)
}

let newAmt = 0;
function amt(){
    const Items = document.querySelectorAll('.items')
    for(let i = 0; i<Items.length; i++){
        let Q = Items[i].querySelector('.qty')
        let R = Items[i].querySelector('.rate')
        const amt = parseInt(Q.value * R.value)
        newAmt = parseInt(newAmt + amt);
        return newAmt;
    }
}

function createTable(item,table){
    const Quantity = item.querySelector('.qty')
    const Desc = item.querySelector('.desc');
    const iname = item.querySelector('.Iname');
    const rate = item.querySelector('.rate')
    const amount = parseInt(Quantity.value * rate.value)

    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)

    cell1.textContent = `${Quantity.value}`;
    cell2.textContent = `${iname.value} - ${Desc.value}`;
    cell3.textContent = `${rate.value}`;
    cell4.textContent = `${amount}`;

    main.appendChild(table)
}
Download.addEventListener("click",()=>{
    var options = {
        margin: 8,
        filename: 'Invoice.pdf',
    };

    html2pdf().from(main).set(options).save();
})