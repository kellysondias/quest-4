const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const textArea = document.querySelectorAll('textarea')
const buttons = document.getElementById('btn')

/* function addInputConditional() {
    inputs.forEach(input => {
        if (input.value === "") console.log('Condicional funcionando')
    })
} */

form.addEventListener('submit', event => {
    event.preventDefault()

    this.forEach(element => {
        if (element.value == "") console.log('Condicional funcionando')
    })
})

/* buttons.addEventListener('click',() => {
    addInputConditional()
}) */