// Elementos por id
console.log(document.getElementById("primeiroh1").innerText);
console.log(document.getElementById("primeiroh2").innerText);

// Elementos por tag
console.log(document.getElementsByTagName("h1")[0].firstChild);

// Pega os elementos por class name
console.log(document.getElementsByClassName("classe-primeiroh1"));

// Pega os elementos por querySelector
console.log(document.querySelector("#primeiroh2").innerHTML);
console.log(document.querySelector("ol .maca").innerHTML);

// Pega os elementos encadeados
console.log(document.querySelector("ol li"));
console.log(document.querySelector("divi div p").innerHTML);
