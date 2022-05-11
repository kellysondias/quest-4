/* ToDo: - Procurar input reset
         - Validação dos formulários obrigatórios  
         - Transformar event listener do button em função limpa
*/

const form = document.querySelector('form')
const button = document.getElementById('btn')
const textInput = document.querySelectorAll('.text-input')

form.addEventListener('submit', event => {
    event.preventDefault()
})

textInput.forEach(el => {
    el.addEventListener('keypress', () => {
        el.classList.add('check')
    })
})

button.addEventListener('click', () => {
    const textInput = document.querySelectorAll('.text-input')
    textInput.forEach(el => {
        if (el.value == '') {
            el.classList.add('error')
        }
    })
})