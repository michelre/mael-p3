const getWorks = () => {
    return fetch('http://localhost:5678/api/works')
    .then(response => response.json())    
}

const getCategories = () => {
    return fetch('http://localhost:5678/api/categories')
    .then(response => response.json())  
    .then(data => [{id: -1, name: 'Tous'}].concat(data))  
}

export {getCategories, getWorks}