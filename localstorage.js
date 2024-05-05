
function handleFormSubmit(event)
{
  event.preventDefault();
  const username=event.target.username.value;
  const email=event.target.email.value;
  const phone=event.target.phone.value;

  const myobj={
    username,
    email,
    phone
    };
  const obj_serialized = JSON.stringify(myobj);
  localStorage.setItem('User Details',obj_serialized);
}
module.exports=handleFormSubmit;