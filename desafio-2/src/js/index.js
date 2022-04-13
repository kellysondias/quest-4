const perguntas = document.querySelectorAll('.caixa-de-texto')

perguntas.forEach( pergunta => {
    pergunta.addEventListener('click', () => {
        const perguntaAtiva = document.querySelector('.texto-ativo')
        
        pergunta.classList.add('texto-ativo')

        if (perguntaAtiva) perguntaAtiva.classList.remove('texto-ativo')

    })
})