const setaEsquerda = document.getElementById("seta-esquerda")
const setaDireita = document.getElementById("seta-direita")
const slideAtivo = document.querySelectorAll(".slide-ativo")
const imagens = document.querySelectorAll(".imagem")
let posicaoDoIndice = 0

setaEsquerda.style.opacity = "0.5"
setaEsquerda.style.cursor = "default"

function ativarSetaDireita () {
    function aplicarOpacidade (ultimoSlide) {
        if (ultimoSlide === imagens.length - 1) {
            setaDireita.style.opacity = "0.5"
            setaDireita.style.cursor = "default"
            return
        }
    }

    posicaoDoIndice++

    imagens.forEach((imagem)=> {
        imagem.classList.remove('slide-ativo')
    })

    imagens[posicaoDoIndice].classList.add('slide-ativo')
    
    if (posicaoDoIndice > 0){
        setaEsquerda.style.opacity = "1"
        setaEsquerda.style.cursor = "pointer"
    }

    aplicarOpacidade(posicaoDoIndice)
}

setaDireita.addEventListener('click', ativarSetaDireita)

/* setaEsquerda.addEventListener('click', ativarSetaEsquerda) */

//------TENTATIVAS-----//

/* setaDireita.addEventListener('click', () => {
    if (indice === imagens.length -1) {
        setaDireita.style.opacity = "50%"
        return
    }

    indice++
    //Retira a classe da primeira div
    imagens.forEach((imagem)=> {
        imagem.classList.remove('slide-ativo')
    })
    //Pega a próxima imagem dentro do array
    imagens[indice].classList.add('slide-ativo')
}) */

/* const setaDireita = document.getElementById("seta-direita")

const imagens = document.querySelectorAll(".imagem")

console.log(imagens)

setaDireita.addEventListener('click', () => {
    imagens.forEach((imagem) => {
        imagem.classList.add('show')
    });
})
 */
 
/* let SetaDireita = document.getElementById("seta-direita")

SetaDireita.addEventListener('click', () => {

    let ImagemDeFundo = document.getElementsByTagName('body')
    
    ImagemDeFundo[0].style.backgroundImage = 'url(src/img/2.jpg)'
    
    let SetaEsquerda = document.getElementById("seta-esquerda")
    
    SetaEsquerda.innerHTML = `<img src="src/img/seta-esquerda.png" id="seta-esquerda" alt="Seta esquerda">`
    
    let Titulo = document.getElementsByTagName("h1")
    
    Titulo[0].innerHTML = `<h1>Titulo imagem 2</h1>`
    
    let Link = document.getElementById("link")
    
    Link.style.color = "#d9dd10"
}) */