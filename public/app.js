 var list = document.getElementById("list")
function addtodo() {
    var todo_item = document.getElementById("todo-item")
    if(todo_item.value == "" ){
        alert("Please Enter What To do ?")
    }
    else{
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext);
    // Delete ()
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.style.backgroundColor = "red"
    delBtn.style.color = "white"
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "del(this)")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    //edit
    var EDITBtn = document.createElement("button")
    var edittext = document.createTextNode("EDIT")
    EDITBtn.style.backgroundColor = "#0077ff"
    EDITBtn.style.color = "white"
    EDITBtn.setAttribute("onclick", "EDIT(this)")
    EDITBtn.setAttribute("class", "btn")
    EDITBtn.appendChild(edittext)
    li.appendChild(EDITBtn)
    
    list.appendChild(li)
    document.getElementById('todo-item').value = "";
}}
    function del(e){
        e.parentNode.remove();
    }
    function EDIT(e){
        var val = e.parentNode.firstChild.nodeValue;
        var editvalue = prompt("Enter value",val);
        e.parentNode.firstChild.nodeValue=editvalue;
    }
    function dellall(){
         list.innerHTML=""
    }


