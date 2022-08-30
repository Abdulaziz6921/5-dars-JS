// console.log(document.querySelector(".h1"));
// console.log(document.querySelector("#h1"));
// console.log(document.querySelector("[data-h1]"));
// console.log(document.querySelectorAll("h2"));

let class_h1 = document.querySelector(".h1class");
const id_h1 = document.querySelector("#h1_iddd");
const attr_h1 = document.querySelector("[data-h1]");
let h2_all = document.querySelectorAll("h2");

// console.log(class_h1);
// console.log(id_h1);
// console.log(attr_h1);
// console.log(h2_all);

console.log(class_h1.className);
console.log(id_h1.id);
console.log(attr_h1.attributes);
console.log(h2_all.length);

console.log(class_h1.innerText);
console.log(class_h1.innerHTML);

let Div = document.querySelector("#div");

console.log(Div.innerHTML);
console.log(Div.innerText);

let Btn = document.querySelector(".btn");

myFunc = () => {
  console.log("Button bosildi");
};

Btn.addEventListener("click", myFunc);

// Mouseeenter
let Btn2 = document.querySelector(".btn2");

myFunc2 = () => {
  console.log("Mouse ustiga bordi");
};
myFunc3 = () => {
  console.log("Mouse chiqib ketti");
};

Btn2.addEventListener("mouseenter", myFunc2);
Btn2.addEventListener("mouseleave", myFunc3);
