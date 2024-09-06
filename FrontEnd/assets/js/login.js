import {getToken} from './api.js'

const form = document.querySelector('form')

form.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    const data = await getToken(email, password)
    localStorage.setItem('token', data.token)
    window.location.href = 'index.html';
})