// Exemplo de funções

// function name(params) {
//     return console.log(params);
// }
// const name = (params) => console.log(params)

// let btn1 = document.querySelector('#btn1');
// const teste = () => console.log('Clicou no botão')
// btn1.addEventListener("click", teste)

let btn1 = document.querySelector('#btn1');

function teste() {
    console.log('Clicou no botão');
}
btn1.addEventListener("click", teste);


const clicouEmMim = () => console.log ('Clicou em mim')
let btn2 = document.querySelector('#btn2');
/*
 * 1 - Adicionou um eventListener de click no btn2 omde a  
 * 2 - Vai chamar a funcão clicou em mim
 * 3 - Função vai chamar o removeEventListener para remover  o event do btn1
 */
// btn2.addEventListener("click",() => {
//     clicouEmMim();
//     btn1.removeEventListener('click',teste)
// })
btn2.addEventListener("click",() => {
    clicouEmMim();
    btn1.removeEventListener('click',teste)
})

let p = document.getElementById('pararagrafo-da-propagacao')
function msg (event){
    event.stopPropagation()
    console.log('clique no botão da propagacao');
}
let quartoBtn = document.createElement('button')
quartoBtn.addEventListener('click', msg)
quartoBtn.innerText = "Botão da propagação"
p.appendChild(quartoBtn)

p.addEventListener('click',() => {
    console.log("clicaram no paragrafo")
})