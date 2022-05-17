/* ToDo: - Validação dos formulários obrigatórios  

    Refatoração: - Procurar input reset
                 - Transformar event listener do button em função limpa
*/

const form = document.getElementById('form')
const textInputs = document.querySelectorAll('.text-input')
const errorMessages = document.querySelectorAll('p')

form.addEventListener('submit', event => {
    event.preventDefault()
    textInputs.forEach((textInput, index) => {
        console.log(textInput, index)
        if (textInput.value == '') {
            textInput.classList.add('error')
            errorMessages[index].style.display = 'block'
        }
    })
})

/* 
textInputs.forEach(el => {
    el.addEventListener('keypress', () => {
        el.classList.add('check')
    })
})

button.addEventListener('click', () => {
    let textInput = textInputs.forEach(textInput => {})

    console.log(textInput)

    textInputs.forEach(textInput => {
        if (textInput.value == '') {
            textInput.classList.add('error')
        }
    })

    textBoxes.forEach(textBox => {
        console.log(textBox)
        textBox.innerHTML += "<p>campo obrigatório</p>"
    })
}) */