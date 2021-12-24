// function findMatches(numbers,...arg) {
//     const matches = [];
//     for (const item of numbers) {
//         if (arg.includes(item))
//         matches.push(item);
//     }
//     console.log (matches);
//     return matches; 
// }
//   findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);



/*----------------------------------------------------*/

// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
//   }
// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
//   }
  
// registerGuest("Манго", greet);

/*----__________________---------------------------*/

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line
  
//   const totalPlayTime = playtimes.reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
//   console.log(totalPlayTime);
//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;
  /*---------------------------------------*/
//   const students = [
//     { name: "Mango", score: 83, totalі: 10},
//     { name: "Poly", score: 59, totalі: 20},
//     { name: "Ajax", score: 37, totalі: 30},
//     { name: "Kiwi", score: 94, totalі: 40},
//     { name: "Houston", score: 64, totalі: 50},
//   ];

//   const totalScore = 
// //   const totalScore = students.reduce((total, table, student) => {
// //     return total;
// //   }, 0);

//   console.log(totalScore);
// //   const averageScore = totalScore / students.length;
 
/*-------------------THIS----------------*/

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
    
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//       console
//     },
    
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// }


// const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
    
//     getOrdersLog() {
//         return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
    
//   };
// console.log(historyService.getOrdersLog());
// //   console.log(historyService.getOrdersLog());

// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     getPrice(){
//         return this.price;
//     }   
// }
// console.log();
// /*--------------------------------*/
// class Storage {
//     constructor(items){
//         this.items = items;
//     }
//     getItems() {
//     return this.items
//     }
//     addItem(newItem) {
//         return this.items.push(newItem);
//     } 
//     removeItem(itemToRemove) {
//         const a = this.items.indexOf(itemToRemove);
//         this.items.splice(a, 1);
//     }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// /*---------------*/
// class StringBuilder {
//     constructor(initialValue){
//         this.value = initialValue;
//     }
//     getValue() {
//       return this.value;
//     }
//     padEnd(str) {
//       this.value += str;
//     }
//     padStart(str) {
//       this.value = str + this.value;
//     }
//     padBoth(str) {
//       this.value = str + this.value + str;
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


/*-----------------OOP---------------*/

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);
// console.log(getWage(baseSalary, overtime, rate));

// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//       return this.baseSalary + this.overtime * this.rate;
//     },
//   };
  
//   console.log(employee.getWage());\

/*----------REPETA PRIMER--------------*/

// const titleBooks = JSON.parse(localStorage.getItem("titleBooks" || "[]"));
// const refs = {
//   button: document.querySelector("button"),
//   input: document.querySelector("input"),
//   container: document.querySelector('ul'),
// };

//  function renderMarkup (boooks) {
//   const boolCont = boooks.map(book => {
//     return`<li>${book}</li>` 
//   }).join('');
//   container.innerHTML = boolCont; 
// };
// renderMarkup(titleBooks);

// function addBook(e) {
//   if(refs.input.value);
//   titleBooks.push(refs.input.value);
//   localStorage.setItem("titleBooks", JSON.stringify(titleBooks));
//   renderMarkup(titleBooks);
//   refs.input.value = "";
// }
// refs.button.addEventListener("click", addBook);