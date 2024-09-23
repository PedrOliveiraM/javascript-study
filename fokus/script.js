const html = document.querySelector('html')
const btnFoco = document.querySelector('.app__card-button--foco ')
const btnFocoCurto = document.querySelector('.app__card-button--curto')
const btnFocoLongo = document.querySelector('.app__card-button--longo')
const appImage = document.querySelector('.app__image')

const title = document.querySelector('.app__title')


btnFoco.addEventListener('click', () => {
    alterarContexto('foco')
})
btnFocoCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})
btnFocoLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo')

})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    appImage.setAttribute('src', `/fokus/imagens/${contexto}.png`)



    switch (contexto) {
        case 'foco':
            desactivatingButtons()
            btnFoco.classList.add('active')
            title.innerHTML = 'Otimize sua produtividade,<br><strong strong class="app__title-strong" > mergulhe no que importa.</strong >'
            break;

        case 'descanso-curto':
            desactivatingButtons()
            btnFocoCurto.classList.add('active')
            title.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>'
            break;

        case 'descanso-longo':
            desactivatingButtons()
            btnFocoLongo.classList.add('active')
            title.innerHTML = 'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>'
            break;
    }



    function desactivatingButtons() {
        const btnsCardContext = document.querySelectorAll('.app__card-button')
        btnsCardContext.forEach(element => {
            element.classList.remove('active')
        });
    }
}
