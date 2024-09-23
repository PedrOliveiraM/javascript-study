const buttons = document.querySelectorAll('button')
console.log(buttons)

const html = document.querySelector('html')

const btnFoco = document.querySelector('.app__card-button--foco ')
const btnFocoCurto = document.querySelector('.app__card-button--curto')
const btnFocoLongo = document.querySelector('.app__card-button--longo')
const appImage = document.querySelector('.app__image')

btnFoco.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    appImage.setAttribute('src', '/fokus/imagens/foco.png')
    btnFoco.classList.add('active')
    btnFocoCurto.classList.remove('active')
    btnFocoLongo.classList.remove('active')

})
btnFocoCurto.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    appImage.setAttribute('src', '/fokus/imagens/descanso-curto.png')
    btnFoco.classList.remove('active')
    btnFocoCurto.classList.add('active')
    btnFocoLongo.classList.remove('active')
})
btnFocoLongo.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    appImage.setAttribute('src', '/fokus/imagens/descanso-longo.png')
    btnFoco.classList.remove('active')
    btnFocoCurto.classList.remove('active')
    btnFocoLongo.classList.add('active')
})



