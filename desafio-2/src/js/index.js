const caixaDeTexto = document.querySelectorAll('.caixa-de-texto')

caixaDeTexto.forEach(texto => {
    texto.addEventListener('click', () => {
        textoAtivo = document.querySelector
        ('.texto-ativo')
        textoAtivo ? texto.classList.remove('texto-ativo') : texto.classList.add('texto-ativo')
    })
})