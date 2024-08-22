import { getCategories, getWorks } from "./api.js"
import Category from "./components/category.js"
import Work from "./components/work.js"


let works = []
let categories = []

const displayWorks = (works) => {
    const gallery = document.querySelector('.gallery')
    gallery.innerHTML = ''
    works.forEach(work => {        
        const w = new Work(work)
        const figure = w.render()

        gallery.appendChild(figure)
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
            displayWorks(filteredWorks)
        })

        categoriesContainer.appendChild(element)
    });
}

const init = async () => {
    categories = await getCategories()
    works = await getWorks()

    displayCategories()
    displayWorks(works)
}

init()

/**
     * TODO:      
     * - Adapter le style de la page d'accueil quand on est connecté (cad que le jeton est présent en localStorage)
     * - Au click sur le bouton "modifier" à côté de "Mes projets", ouvrir la modal "Galerie Photo"
     * 
     */