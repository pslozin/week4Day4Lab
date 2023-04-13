const newUserName = document.querySelector('#usernameNew')
const newUserPass = document.querySelector('#passwordNew')

const newUserSendButton = document.querySelector('#newUserButton')

const exUserName = document.querySelector('#usernameEx')
const exUserPass = document.querySelector('#passwordEx')

const exUserSendButton = document.querySelector('#exUserButton')


const newUserhadler = () =>{
    let body = {
        nUsername: newUserName.value,
        nUserpass: newUserPass.value
    }
    
    axios.post('http://localhost:4000/register',body).then(response => {
        console.log(response.data)
    })
    
}

const exUserhandler= () =>{
    let body = {
        exUsername: exUserName.value,
        exUserpass: exUserPass.value
    }
    
    axios.post('http://localhost:4000/login',body).then(response => {
        console.log(response.data)
    })
    
}

newUserSendButton.addEventListener('click',newUserhadler)
exUserSendButton.addEventListener('click',exUserhandler)

