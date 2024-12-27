const inputBox=document.getElementById("input");
const listCont=document.getElementById("listcont");
function addTask(){
    if(inputBox.value === ''){
        alert("You must add text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listCont.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
    }
listCont.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcont.innerHTML)
}
function showTask(){
    listcont.innerHTML=localStorage.getItem("data");
}
showTask();