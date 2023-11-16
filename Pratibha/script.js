const typingText = document.querySelector(".typing-text p"),

inpField = document.querySelector(".wrapper .input-field"),

tryAgainBtn = document.querySelector(".content button"),

timeTag = document.querySelector(".time span b"),

mistakeTag = document.querySelector(".mistake span"),

wpmTag = document.querySelector(".wpm span"),

cpmTag = document.querySelector(".cpm span"), 

icon = document.getElementById("icon"),

wrapper = document.querySelector(".wrapper");




let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = 0;

//for dark mode functionality



   icon.addEventListener("click", (e)=>{

    console.log(e.target);

    wrapper.style.backgroundColor = "black";
    wrapper.style.color ="white"


   
   console.log(icon.src);


   if(icon.src.includes("moon.png")){

    // console.log("log");
    icon.src = "./sun.png";
    wrapper.style.backgroundColor = "black";
    wrapper.style.color ="white"


   }else{
    icon.src = "./moon.png";
    wrapper.style.backgroundColor = "white";
    wrapper.style.color ="black"


   }

   
    // e.attr("src","./sun.png");


   })


function loadParagraph() {


    

    // console.log(paragraphs[1]);

    //getting random number and it'll always less than the paragraph length

    const ranIndex = Math.floor(Math.random() * paragraphs.length);

    

    //getting random item from the paragraph array, splitting all character of it adding each character inside span and then adding this span inside p tag

    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;

    });

    typingText.querySelectorAll("span")[0].classList.add("active");

    //focusing input field on keydown or click event

    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());


    
}


function initTyping() {
    let characters = typingText.querySelectorAll("span");

    // console.log(characters[0]);

    let typedChar = inpField.value.split("")
    [charIndex];

    // console.log(typedChar);


    if(charIndex < characters.length - 1 && timeLeft > 0) {

        if(!isTyping) {  // once timer is start it wont restart again on every key clicked 
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        // if user hasnt entered any character or pressed backspace 

        if(typedChar == null) {
            if(charIndex > 0) {
                charIndex--; // decrement charIndex

                //decrement mistake only if the charIndex span contain incorrect class
                if(characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;

                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if(characters[charIndex].innerText == typedChar) {

                //if user typed character and shown character matched then add the correct else  increment the mistakes and add the incorrect class
                characters[charIndex].classList.add("correct");

                // console.log("correct");
            } else {

                mistakes++;
                characters[charIndex].classList.add("incorrect");

                // console.log("Incorrect");
            }

            charIndex++; // increment charIndex either user typed correct or incorrect character
        }

        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        //if wpmvalue is 0, empty , or infinite then setting its value to 0
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        wpmTag.innerText = wpm;

        mistakeTag.innerText = mistakes;

        cpmTag.innerText = charIndex - mistakes;  //cpm will not count the mistakes

    } else {
        clearInterval(timer);
        inpField.value = "";
    }  

}

function initTimer() {
    //timleft is greater than 0 then decrement the timeleft else clear the interval

    if(timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {

    //we have call loadparagraph function and resetting each variable and element value to default
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}






loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);



