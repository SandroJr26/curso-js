// Básico de Função
const perimetro = Function("lado", "return lado * 4"); // NUNCA criar uma função dessa maneira.

function areaQuadrado(lado) {
  return lado * 4;
}

function somar(n1, n2) {
  return n1 + n2;
}

somar(3, 4); // retorna 1 numero
somar; // retorna a função
somar.length; // 2 retorna o total de argumentos da funcão
somar.name; // retorna o nome da função como String

// call(this, arg1, arg2, ...) executa a função, sendo possível passarmos uma nova referência ao this da mesma.

function hello(name, age) {
  return "Hello for you! " + name + age;
}

hello.call({}, "Sandro ", 26);

window.brand = "Volkswagen"; // Maneira errada de atribuir o this
window.age = 2010;

function descriptionCar(velocidade) {
  return this.brand + " " + this.age + " " + velocidade;
}

// Maneira certa de atribuir o this
const car = {
  brand: "Ford",
  age: 2023,
};

descriptionCar.call(car, 120); // 2 maneiras de chegar ao mesmo resultado
descriptionCar.call({ brand: "Chevrolet", age: 1956 }, 100);

const cars1 = ["Ford", "Fiat", "VW"];
const cars2 = ["Ferrari", "Renault", "Toyota"];

cars1.forEach((car) => {
  // console.log(car.toUpperCase());
});

cars1.forEach.call(cars2, (car) => {
  // console.log(car.toUpperCase());
});

// Uso de código de fácil leitura e manuntenção usada pelo mercado
function Dom(selector) {
  this.element = document.querySelectorAll(selector);
}

Dom.prototype.ativo = function (classe) {
  this.element.forEach((item) => {
    item.classList.add(classe);
  });
};

const ul = new Dom("ul");
const li1 = {
  element: document.querySelectorAll("li"),
};
ul.ativo("ativo");

// call substitui o elemento anterior que é parecido com o original
// uso viável
Dom.prototype.ativo.call(li1, "ativo");

// uso inviável
// ul.ativo.call(li, "ativo");

const fruits = ["Uva", "Maça", "Pêra"];

Array.prototype.pop.call(fruits);
fruits.pop(fruits); // Exatamente o mesmo código

// Array.prototype.metotos serão utilizados com um objeto que se pareçam com um Array

// Object parecido com uma array
const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
};

const li2 = document.querySelectorAll("li");
const arrayLi = Array.from(li2);

const filter = Array.prototype.filter.call(li2, function (item) {
  return item.classList.contains("ativado");
});

const filter2 = arrayLi.filter((item) => {
  return item.classList.contains("ativado");
});

// apply

// bind
