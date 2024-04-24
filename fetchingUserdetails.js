function handleFormSubmit(event) {
    event.preventDefault();
  
      const editUserId = document.getElementById('editUserId').value;
      const Name = document.getElementById('username').value;
      const Email = document.getElementById('email').value;
      const Phone = document.getElementById('phone').value;
  
      const obj = {
          Name,
          Email,
          Phone
      };
    window.addEventListener('DOMContentLoaded', () => {
      axios.get('https://crudcrud.com/api/ce610c8b865f402f97f2b65dc3619a44/appointmentdata')
          .then((res) => {
              for (let i = 0; i < res.data.length; i++) {
                  showOnScreen(res.data[i]);
              }
          })
          .catch((err) => {
              console.log(err);
          });
  });
  
  function showOnScreen(obj) {
      const parentEle = document.getElementById('listofusers');
      const listItem = document.createElement('li');
      listItem.id = obj._id;
      listItem.innerHTML = `${obj.Name}-${obj.Email}-${obj.Phone}
          <button onclick="deleteUser('${obj._id}')">Delete</button>
          <button onclick="populateFormForEditing('${obj._id}','${obj.Name}','${obj.Email}','${obj.Phone}')">Edit</button>`;
      
      parentEle.appendChild(listItem);
  }
    
  }
  
  