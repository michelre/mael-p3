const form = document.querySelector('form')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    localStorage.setItem('token', email)
    console.log(localStorage.getItem('token'))
      window.location.href = 'index.html';


    /**
     * TODO:
     * - Créer une fonction dans api.js qui fait l'appel à l'API pour se connecter (récupérer le jeton)
     * - Stocker le jeton en localStorage
     * - Rediriger l'utilisateur sur la page d'accueil
     * - Adapter le style de la page d'accueil quand on est connecté (cad que le jeton est présent en localStorage)
     *
     */





    console.log(email, password)
})

document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  const editLink = document.getElementById('edit-link');

  if (token) {
      editLink.style.display = 'block';
  }
});
