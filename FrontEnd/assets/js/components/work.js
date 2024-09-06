class Work {

    constructor(work, onDeleteWork){
        this.work = work
        this.onDeleteWork = onDeleteWork
    }

    render(){
        const figure = document.createElement('figure')
        const image =document.createElement('img')
        image.setAttribute('src', this.work.imageUrl)
        image.setAttribute('alt', this.work.title)
        figure.appendChild(image)
        const figcaption = document.createElement('figcaption')
        figcaption.innerText = this.work.title
        figure.appendChild(image)
        figure.appendChild(figcaption)

        return figure
    }

    renderModal(){
        const figure = document.createElement('figure')
        const image =document.createElement('img')
        image.setAttribute('src', this.work.imageUrl)
        image.setAttribute('alt', this.work.title)
        figure.appendChild(image)
        figure.appendChild(image)
        const deleteButton = document.createElement('button')
        const imgButton = document.createElement('img')
        imgButton.src = 'assets/icons/delete.svg'
        imgButton.alt = `Supprimer ${this.work.title}`
        deleteButton.appendChild(imgButton)
        figure.appendChild(deleteButton)

        deleteButton.addEventListener('click', () => {
            this.onDeleteWork(this.work.id)
        })

        return figure
    }

}

export default Work;