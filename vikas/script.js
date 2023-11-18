let text=document.getElementById("html");
text.addEventListener('keyup', function(e){
    localStorage.setItem("name", text.value);
});
if(localStorage.getItem("name")){
    text.value = localStorage.getItem("name");
}

let text2=document.getElementById("css");
text2.addEventListener('keyup', function(e){
    localStorage.setItem("name2", text2.value);
});
if(localStorage.getItem("name2")){
    text2.value = localStorage.getItem("name2");
}

let text3=document.getElementById("js");
text3.addEventListener('keyup', function(e){
    localStorage.setItem("name3", text3.value);
});
if(localStorage.getItem("name3")){
    text2.value = localStorage.getItem("name3");
}