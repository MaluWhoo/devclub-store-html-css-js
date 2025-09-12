
const prevButton = document.getElementById('prev') // Botão de voltar
const nextButton = document.getElementById('next') // Botão de avançar
const items = document.querySelectorAll('.item') // querySelectorAll --> busca todo mundo do HTML que tem a classe item
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers') // querySelector - Aqui só tem uma classe com numbers
const list = document.querySelector(".list")

// VARIAVEIS 
let active = 0
const total = items.length // O items vai ser guardados em uma caiax (maxtrix), .length -> fala quantos items tem em uma caixa
let timer;


function update(direction) {

    // Ele procura quem tem a classe ITEM E ACTIVE e remove a active
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if(direction > 0){
        active = active + 1

        if(active === total){
            active = 0
        }

    } else if (direction < 0){
        active = active - 1
        
        if(active < 0){
            active = total -1
        }
    }

    items[active].classList.add('active') 
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2,'0') // Ele vai trocar o texto
}

    clearInterval(timer) // Faz com que as imagens passem em um intervalo de segundos
    timer = setInterval(() => {
        update(1)
    }, 5000); 


// BOTÔES
prevButton.addEventListener('click', () => {  // function()
    update(-1) // Usar o alert para testar
}) 

nextButton.addEventListener('click', () => {  // function()
    update(1) // O botão vai 1 item e o outro volta 1 item

}) 