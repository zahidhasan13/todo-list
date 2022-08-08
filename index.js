const name = document.querySelector('#name');
const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');
const submitBtn = document.querySelector('.btn');
const listItem = document.querySelector('#list-item');

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    if(name.value=='' && email.value=='' && mobile.value==''){
        alert("Somethimg is wrong");
    }else{
        const newRow = document.createElement('tr');

         newName = document.createElement('td');
        newName.innerHTML = name.value;
        newRow.appendChild(newName)

         newEmail = document.createElement('td');
        newEmail.innerHTML = email.value;
        newRow.appendChild(newEmail)

         newMobile = document.createElement('td');
        newMobile.innerHTML = mobile.value;
        newRow.appendChild(newMobile)

        listItem.appendChild(newRow)
    }
})