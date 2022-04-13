const caixaDeTexto = document.querySelectorAll('.caixa-de-texto')

console.log(caixaDeTexto)
caixaDeTexto.forEach(texto => {
    texto.addEventListener('click', () => {
        console.log(texto)
        texto.classList.remove('texto-ativo')
        texto.classList.add('texto-ativo')
    })
})