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
    const obj_serialized = JSON.stringify(myobj);
    localStorage.setItem(myobj.emailId,obj_serialized);
    showUserOnScreen(myobj);
  }
  
  function showUserOnScreen(myobj){
    this.obj=myobj
    const parentElement=document.getElementById('listofItems');
    parentElement.innerHTML=parentElement.innerHTML+`<li> ${myobj.username} - ${myobj.email} - ${myobj.phone}</li>`;
    }
  