const form = document.getElementById('form')
const textInputs = document.querySelectorAll('.text-input')

form.addEventListener('submit', event => {
    event.preventDefault()
    textInputs.forEach(textInput => {
        if (textInput.value == '') {
            textInput.classList.add('error')
            textInput.nextElementSibling.classList.add('show')
        } else {
            textInput.classList.remove('error')
            textInput.nextElementSibling.classList.remove('show')
        }
    })
})

textInputs.forEach(textInput => {
    textInput.addEventListener('keydown', () => {
        if (textInput.value !== '') {
            textInput.classList.remove('error')
            textInput.nextElementSibling.classList.add('hide')
            textInput.classList.add('check')
        }
    })
})