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
    localStorage.setItem(myobj.username,JSON.stringify(myobj));
    showUserOnScreen(myobj);
  }
  
  function showUserOnScreen(myobj)
  {
    const parentElem=document.getElementById('listOfItems');
    const childElem=document.createElement("li");
    childElem.textContent=myobj.username+ '-'+ myobj.phone + '-' +  myobj.email;
    
   
    
    const deletebutton=document.createElement("button");
    deletebutton.value="delete"
    deletebutton.type="button"
    deletebutton.textContent="Delete Expense"
  
    deletebutton.onclick=()=> 
      {
      localStorage.removeItem(myobj.email)
      parentElem.removeChild(childElem)
      }
  
  
    const editbutton=document.createElement("button");
    editbutton.type="button"
    editbutton.value="Edit"
    editbutton.textContent="Edit Expense"
    editbutton.onclick=()=> 
      {
      localStorage.removeItem(myobj.email);
      parentElem.removeChild(childElem);
      document.getElementById("username").value=myobj.username
      document.getElementById("email").value=myobj.email
      document.getElementById("phone").value=myobj.phone 
  }
  childElem.appendChild(deletebutton)
  childElem.appendChild(editbutton)
  parentElem.appendChild(childElem)    
    
    
  }