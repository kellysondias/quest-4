/* ToDo: - Procurar input reset
         - Validação dos formulários obrigatórios 
*/


const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const textArea = document.querySelector('textarea')
const button = document.getElementById('btn')

/* form.addEventListener('submit', event => {
    event.preventDefault()
}) */

inputs.forEach(input => {
    input.addEventListener('keypress', () => input.style.borderColor = '#00c22b')
})

textArea.addEventListener('keypress', () => textArea.style.borderColor = '#00c22b')

/* form.addEventListener('submit', event => {
    event.preventDefault()

    this.forEach(element => {
        if (element.value == "") console.log('Condicional funcionando')
    })
}) */

/* function addInputConditional() {
    inputs.forEach(input => {
        if (input.value === "") console.log('Condicional funcionando')
    })
} */


/* buttons.addEventListener('click',() => {
    addInputConditional()
}) */