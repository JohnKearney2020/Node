//find form on ejs page 
let form = document.querySelector('form');
//attach eventlister to form element 
form.addEventListener('submit', (e) => {
    e.preventDefault();
//retrieve data from form 
    let email = document.getElementById('email');
    console.log(email.value);
    let isValid = document.getElementById('isValid');
    console.log(isValid.value);
    let isTrue = document.getElementById('isTrue');
    console.log(isTrue.value);
    let password = document.getElementById('password');
    console.log(password.value);
    //put data in json format 
    // fetch call back to server
    fetch('/', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        body: {
            'email': email.value,
            'isValid': isValid.value, 
            'isTrue': isTrue.value, 
            'password': password.value
        }
    })
    .then((response)=>{
        let msg = document.getElementById('msg');
        msg.textContent = "Your form was submitted"
    })
    .catch(()=>{
        let msg = document.getElementById('msg');
        msg.textContent = "Error in form submission"
    })
})
// let myButton = document.getElementById('myButton');
// myButton.addEventListener('click', (e) => {
//     alert('we clicked a button')
// })
// fetch("url", {
//     method: "POST",
//     body: "json data"
// })
// .then()