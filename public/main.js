const fa = document.querySelector('.fa')

fa.addEventListener('click', (e) =>{
    axios.get('/like')
})