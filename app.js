const API_KEY = 'YOUR_OWN_CHATGPT_API_KEY'
const submitButton = document.querySelector('#submit')
const outputElement = document.querySelector('#output')
const inputElement = document.querySelector('input')
const historyElement = document.querySelector('.history')
const buttonElement = document.querySelector('button')

function changeInput(value) {
    const inputElement = document.querySelector('input')
    inputElement.value = value
}

async function getMessage() {
    const urlApi = 'https://api.openai.com/v1/chat/completions'
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: inputElement.value }],
            max_tokens: 100
        })
    }

    console.log({options})

    try {
        // const response = await fetch(urlApi, options)
        // const data = await response.json()

        const response = await fetch('./dataFake.json')
        const data = await response.json()

        console.log(data)
        outputElement.textContent = data.choices[0].message.content

        if(data.choices[0].message.content && inputElement.value) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            pElement.addEventListener('click', () => changeInput(pElement.textContent))
            historyElement.append(pElement)
        }

    } catch(e) {
        console.error(e)
    }
}

function clearInput() {
    inputElement.value = ''
}

submitButton.addEventListener('click', getMessage)
buttonElement.addEventListener('click', clearInput)