const form=document.getElementById("form");
const input=document.getElementById("input");
const list=document.getElementById("list");
let notes=JSON.parse(localStorage.getItem("notes"))|| [];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const text=input.value.trim()//prevenst fake empty notes;
    if(text=== ""){
        alert("Please enter a valid note!");
        return;
    };
    notes.push(text);
    localStorage.setItem("notes",JSON.stringify(notes));
    input.value="";
    displaynote();
});
function displaynote(){
    list.innerHTML="";
    notes.forEach((note,index)=>{
        const li=document.createElement("li");
        li.textContent=note;
        list.appendChild(li);
    })
}
displaynote();