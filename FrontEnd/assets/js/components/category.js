class Category {

    constructor(category){
        this.category = category
    }

    render(){
        const element = document.createElement('li')
        element.innerHTML = this.category.name        
        element.dataset.id = this.category.id
        return element
    }

}

export default Category;