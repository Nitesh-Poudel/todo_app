const inputBox=document.getElementById("inputbox");
const showBox=document.getElementById("tasks");

function addtask(){
    if(inputBox.value===''){
        alert("You must enter the task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        showBox.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
   
    showBox.addEventListener("click",function(e){
        if(e.target.tagName==='LI'){
            e.target.classList.toggle("checked");
            saveData()
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData()
        }
    },false);


    function saveData(){
      localStorage.setItem("data",tasks.innerHTML)  
    }
//saved..data.....
    function showTask(){
        showBox.innerHTML=localStorage.getItem("data");
    }
    showTask();
}