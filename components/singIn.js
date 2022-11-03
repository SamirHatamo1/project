const userName = document.querySelector("#userName")
const password = document.querySelector("#password")
const enter = document.querySelector("#enter")
const enterPlace = document.querySelector("#enterPlace")
const showPass = document.querySelector("#showPass")
const notific = document.querySelector("#notific")
const button = document.querySelector("#button") // у тебя нет элемента с id="button"

button.addEventListener(('click'), () => {
    console.log('hi')
})



enter.addEventListener(('click'), () => {
    if(userName.value === 'admin' && password.value === 'admin12345'){
        enterPlace.innerHTML = ''
    } else {
        notific.innerHTML = 'Неверный пароль'
    }
})




showPass.addEventListener(('click'), () => {
    if(password.getAttribute('type') === 'password'){
        password.setAttribute('type', '')
    }else {
        password.setAttribute('type', 'password')
    }
})