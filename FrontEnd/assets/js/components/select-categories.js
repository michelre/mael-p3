class SelectCategories {

    constructor(categories){
        this.categories = categories
    }

    render(){
        const select = document.querySelector('select[name="select-categories"]')
        this.categories.forEach(element => {
            const option = document.createElement('option')
            option.innerText = element.name
            option.value = element.id
            select.appendChild(option)
        });
        return select
    }

}

export default SelectCategories;