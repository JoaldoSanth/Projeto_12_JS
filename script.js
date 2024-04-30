const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
    if(event.kay === "Enter")
    addItem();
})

function addItem(){
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trasIcon = document.createElement("i")

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener ("click", function(){
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trasIcon.className = "fas fa-trash";
    trasIcon.style.color = "darkgray";
    trasIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trasIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}