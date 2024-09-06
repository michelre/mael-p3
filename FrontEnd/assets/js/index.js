import { getCategories, getWorks, deleteWork, addWork } from "./api.js"
import Category from "./components/category.js"
import Work from "./components/work.js"

let works = []
let categories = []

const displayWorks = (works, isModal) => {
    let gallery = document.querySelector('.gallery')
    if(isModal){
        gallery = document.querySelector('.gallery-modal')
    }
    gallery.innerHTML = ''
    works.forEach(work => {
        const w = new Work(work, onDeleteWork)
        const li = document.createElement('li')
        const figure = isModal ? w.renderModal() : w.render()
        li.appendChild(figure)
        li.dataset['workId'] = work.id

        gallery.appendChild(li)
    })
}

const displayCategories = () => {
    const categoriesContainer = document.querySelector('.categories')
    categories.forEach(category => {
        const c = new Category(category)
        const element = c.render()

        element.addEventListener('click', (e) => {
            const categoryId = parseInt(e.target.dataset.id)
            let filteredWorks = works
            if(categoryId !== -1) {
                filteredWorks = works.filter(w => parseInt(w.categoryId) === categoryId)
            }
            displayWorks(filteredWorks, false)
        })

        categoriesContainer.appendChild(element)
    });
}

const displayAdminActions = () => {
    const editLink = document.querySelector('#edit-link')
    if(localStorage.getItem('token')){
        editLink.style.display = 'block'
    }
    displayWorks(works, true)
}

const init = async () => {
    categories = await getCategories()
    works = await getWorks()

    displayCategories()
    displayWorks(works, false)
    displayAdminActions()
}

const onDeleteWork = async (idWork) => {
    const res = await deleteWork(idWork)
    if(res === 204){
        const workIds = document.querySelectorAll(`[data-work-id="${idWork}"]`)
        workIds.forEach(e => e.remove())
    }
}

const onAddWork = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const status = await addWork(formData);
        if (status === 201) {
            alert('Photo ajoutée avec succès!');
            form.reset();
            const updatedWorks = await getWorks();
            displayWorks(updatedWorks, false);
        }
      } catch (error) {
        alert('Erreur lors de l\'ajout de la photo');
      }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-photo-form');
    if (form) {
        form.addEventListener('submit', onAddWork);
    }
  });

init()

/**
     * TODO:
     * Finir le formulaire d'ajout
     * Ajouter une fonction dans api.js pour faire l'appel API d'ajout d'image (FormData)
     * Ajouter un évnèment sur l'envoi du formulaire
     *  - Faire un appel à la fonction créée dans api.js
     *  - Ajouter la nouvelle image dans la gallerie principale et de la modale
     */
