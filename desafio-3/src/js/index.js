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
        if (textInput.value == '') {
            textInput.classList.add('error')
            textInput.nextElementSibling.classList.add('show')
        }
    })
})

textInputs.forEach(input => {
    input.addEventListener('change', () => {
        console.log('funcionou');
    })
})