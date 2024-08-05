fetch('http://localhost:5678/api/categories')
.then(response => response.json())
.then((data) => {
    const categories = document.querySelector('.categories')
    data.forEach(category => {
        const element = document.createElement('li')
        element.innerHTML = category.name
        categories.appendChild(element)
    });
})