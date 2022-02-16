const setaEsquerda = document.getElementById("seta-esquerda")
const setaDireita = document.getElementById("seta-direita")
const imagens = document.querySelectorAll(".imagem")
const slideAtivo = document.getElementById("slide-ativo")
const primeiroSlide = document.querySelectorAll("primeiro-slide")
let indice = 0

console.log(imagens[indice])

//Transformar em funções
setaDireita.addEventListener('click', () => {
    if (indice === imagens.length -1) {
        //Mudar a opacidade
        return
    }

    indice++
    //Retirar a classe da primeira div
    imagens.forEach((imagem) => {
        console.log(imagem)
        imagem.classList.remove('slide-ativo')
    })
    //Pegar a próxima imagem dentro do array
    imagens[indice].classList.add('slide-ativo')

}
)
//------TENTATIVAS-----//

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