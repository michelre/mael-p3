class Work {

    constructor(work){
        this.work = work
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

}

export default Work;