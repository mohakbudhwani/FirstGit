// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
  
    const myobj={
      username:username,
      email:email,
      phone:phone
      };
    localStorage.setItem(myobj.email,JSON.stringify(myobj));
    showUserOnScreen(myobj);
  }
  module.exports=handleFormSubmit;
  
  function showUserOnScreen(myobj)
  {
    const parentElem=document.getElementById('listOfItems');
    const childElem=document.createElement("li");
    childElem.textContent=myobj.username+ '-'+ myobj.email + '-' + myobj.phone;
    
   
    
    const deletebutton=document.createElement("button");
    deletebutton.value="Delete"
    deletebutton.type="button"
    deletebutton.onclick=()=> {
      localStorage.removeItem(myobj.email)
      parentElem.removeChild(childElem)
}
childElem.appendChild(deletebutton)
parentElem.appendChild(childElem)
    }