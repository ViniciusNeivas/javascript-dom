// // Elementos por id
// console.log(document.getElementById("primeiroh1").innerText);
// console.log(document.getElementById("primeiroh2").innerText);

// // Elementos por tag
// console.log(document.getElementsByTagName("h1")[0].firstChild);

// // Pega os elementos por class name
// console.log(document.getElementsByClassName("classe-primeiroh1"));

//Pega os elementos por querySelector
// console.log(document.querySelector("#primeiroh2").innerHTML);
// console.log(document.querySelector("ol .maca").innerHTML);

//Criando um elemnto
let umNovoParagrafo = document.createElement("p")

//Craindo um novo texto
let textoNovo = document.createTextNode("Algum exemplo")

// Add um texto ao novo elemento
umNovoParagrafo.appendChild(textoNovo)

// Selecionando elementos aninhados
let paragrafoDeDentroDaDiv = document.querySelector("div div p")

// Selecionando elemento pai por ID com querySelector
let elementoPai = document.querySelector("#segundaDiv")

// Inseriu um novo paragráfo antes do outro paragráfo
elementoPai.insertBefore(umNovoParagrafo, paragrafoDeDentroDaDiv)

// Criando um novo texto na lista
let umNovoItemDeLista = document.createElement("li");

//Criar o texto
let textoLi = document.createTextNode("Goiaba");

// Add o texto no item da lista
umNovoItemDeLista.appendChild(textoLi);

// Add o intem da lista e seu texto na lista ordenada
document.getElementById('minha-lista').appendChild(umNovoItemDeLista);

let novoItemDeLista = document.createElement("li");
let outroTextoLi = document.createTextNode("Sabão");
novoItemDeLista.appendChild(outroTextoLi);

let listItemBanana = document.getElementById('banana');
let pai = listItemBanana.parentNode

// Add o elemento com appendChild
pai.appendChild(novoItemDeLista);

let elementoP = document.getElementById("paragrafo")
let paiElementoP = elementoP.parentNode;

//Criando um elemnto
let umSpan = document.createElement("span")

//Craindo um novo texto
let textoNovoSpan = document.createTextNode("Novo Span")

// Add um texto ao novo elemento
umSpan.appendChild(textoNovoSpan)

// Substituindo um elemento filho por outro elemento
paiElementoP.replaceChild(umSpan, elementoP)

let nossoLink = document.querySelector("a")
console.log("HREF: ", nossoLink.href);
console.log("href com getAttribute", nossoLink.getAttribute('href'));

nossoLink.setAttribute("href","https://www.linkedin.com/feed/")

let primeiroh1 = document.getElementById('primeiroh1')

// console.log("Largura: ", primeiroh1.clientWidth);
// console.log("Altura: ", primeiroh1.clientHeight);

// console.log("Largura: ", primeiroh1.offsetWidth);
// console.log("Altura: ", primeiroh1.offsetHeight);

// console.log("primeiroh1: ", primeiroh1.getBoundingClientRect());

setTimeout (() => {
    primeiroh1.style.color = 'green';
    primeiroh1.style.backgroundColor = 'blue';
},2000)

let todosElementosListitem = document.querySelectorAll('li')
console.log("todosElementosListitem", todosElementosListitem[4].style.color = 'red');