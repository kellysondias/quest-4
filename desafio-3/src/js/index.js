const inputs = document.querySelectorAll('input')
const textArea = document.querySelectorAll('textarea')
const buttons = document.getElementById('btn')

function addInputConditional() {
    inputs.forEach(input => {
        if (input.value == undefined) console.log('Condicional funcionando')
    })
}

buttons.addEventListener('click',() => {
    addInputConditional()
})