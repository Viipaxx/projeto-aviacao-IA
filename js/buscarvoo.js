const buscar = document.querySelector('#buscar')

buscar.addEventListener('click', () => {
    document.querySelector('.voo').classList.remove('show')
})

const favoritar = document.querySelector('#favoritar')

favoritar.addEventListener('click', () => {
    document.querySelector('.voo').classList.add('show')
})