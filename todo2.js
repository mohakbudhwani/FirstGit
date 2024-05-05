myObj = {
    todo:document.getElementById("todo").value,
    description:document.getElementById("Description").value,
};
function handleFormSubmit(event) {
    event.preventDefault();
    const Todo=event.target.username.value
    const description=event.target.Description.value
    myObj = {
        Todo,
        description
    };

    axios.post("https://crudcrud.com/api/506eb936060d45f99c612d06040a1797/Data",myObj)
        .then((res) => {
            ShowUserOnScreen(res.data);
        })
        .catch((err) => {
            console.log(err);
        })






}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/506eb936060d45f99c612d06040a1797/Data")
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                ShowUserOnScreen(res.data[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
function ShowUserOnScreen(user) {
    const ParentEle = document.getElementById("listOfItems");
    const childEle = document.createElement("li");
    childEle.appendChild(document.createTextNode(`${user.Todo} - ${user.description}`));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE NOTE";
    deleteButton.type = "button";
    // deleteButton.id=user._id;
    

    const editbutton=document.createElement("button");
    editbutton.type="button"
    editbutton.textContent="EDIT NOTE"
    // editbutton.dataset.xyz=user._id;
    editbutton.onclick=()=>{
        EditUser(user._id)
        ParentEle.removeChild(childEle)
        document.getElementById("todo").value=user.Todo
        document.getElementById("Description").value=user.description
    }

    deleteButton.onclick = () => {
        deleteUser(user._id);
        ParentEle.removeChild(childEle)
    };

    childEle.appendChild(deleteButton);
    childEle.appendChild(editbutton);
    ParentEle.appendChild(childEle);
    document.getElementById("todo").value = "";
    document.getElementById("Description").value = ""
}
function deleteUser(userId) {
    axios.delete("https://crudcrud.com/api/506eb936060d45f99c612d06040a1797/Data/"+userId)
        .then((res) => {
            removeFromScreen(userId);
        })
        .catch((err) => {
            console.log(err);
        });
}


function removeFromScreen(userId) {
    const parentEle = document.getElementById('listOfItems');
    const childEle = document.getElementById(userId);
    if (childEle) {
        parentEle.removeChild(childEle);
    }
}

function EditUser(userId){
    if (userId){
        axios.put("https://crudcrud.com/api/506eb936060d45f99c612d06040a1797/Data/"+userId,myObj)
        .then((res)=>{
            updateOnScreen(userId,myObj)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    else{
        axios.post("https://crudcrud.com/api/506eb936060d45f99c612d06040a1797/Data",myObj)
        .then((res) => {
            ShowUserOnScreen(res.data);
        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + '<h4>Something went wrong</h4>'
            console.log(err);
        })
    }

}

function updateOnScreen(userId, updatedObj) {
    const listItem = document.getElementById(userId);
    if (listItem) {
        listItem.innerHTML = `${updatedObj.Todo} - ${updatedObj.description}
        
        <button onclick="EditUser('${updatedObj.Todo}','${updatedObj.description}','${userId}')">Edit</button>`;
    }
}

// document.getElementById("todo").value = "";
// document.getElementById("Description").value = ""