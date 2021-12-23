// const arrName = ["Bill", "Jhony", "Ivan", 6];
​
// console.log(arrName[0]); // bill
// console.log(arrName[1]); // jhony 
// console.log(arrName[2]); // ivan
// console.log(arrName[3]); // 6
// console.log(arrName.length); // 4
// console.log(arrName.length-1); // 3 index
// console.log(arrName[arrName.length-1]); // 6 item
​
/*-------------------------*/
​
// for (let i = 0; i < arrName.length; i++) {
//     console.log(arrName[i]);
// }
​
// const arrNum = [1,2,3,4,5];
// let total = 0;
​
// for (const item of arrNum) {
//     total += item;
// }
​
// console.log(total);
​
/*-------------------*/
​
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
​
//for (let i = 0; i < numbers.length; i += 1) {
​
// let result;
// for (const item of numbers) {
//   if (item >= threshold) 
//     console.log(`Число больше чем ${threshold}: ${item}`); 
// }
​
​
/*-------------------*/
​
// const arr = ['test', 'test1'];
// const arr1 = arr;
​
// console.log(arr); // ['test', 'test1']
​
// arr[0] = 1; // изменение оригинала
// arr1[1] = 10; // изменение оригинала по копии ссылки
​
// console.log(arr1); // вывод по скопированеной ссылки
​
// arr[0] = 20; // изменение оригинала
// const arr2 = []; // создание нового массива
// for(const item of arr) { // перебор оригинального массива
//     arr2.push(item); // добавляем в конец новые элементы массива
// }
// arr[1] = 'test'; // изменение оригинала
// console.log(arr2); // вывод скопированного массива
​
​
/*------------------*/
​
// const arr = [1, 2, 3, 4, 5, 'test', 6, 7, 8, 9, '11', [0,1,]];
// const str = "Если индекс отрицательный, begin указывает смещение от конца последовательности. Вызов slice(-2) извлечёт два последних элемента последовательности.";
​
// const arr1 = arr.slice(0, -1);
​
// console.log(arr1);
​
// console.log(arr.join(" | "));
// const arrStr = str.split(" ");
​
// arrStr.push('1111');
// console.log(arrStr);
​
// const a = [1,2,3];
// const b = [1,2,3];
​
// if (`${a}` === `${b}`) {
//     console.log('OK');
// }
​
// console.log(arr.indexOf('test'));
// console.log(arr.includes(11));
​
// console.log(arr);
​
// for (let i = 0; i < 5; i++) {
//     arr.push(`TEST_${i}`);
// }
​
// console.log(arr.pop());
​
// arr.splice(arr.indexOf(5), 0, 'test15', 'test17', 'test16');
​
// console.log(arr);
​
​
// const arr1 = ['Bill', 'Mango', 1];
// const arr2 = ['Ivan', 'Anton'];
// const arr3 = arr1.concat(arr, [0, 0, 0], arr2);
​
// console.log(arr3);
​
/*---------------------*/
​
// const arr = [
//     [1, 2, 3, 4],
//     [2, 5, 4, 6],
//     [1, 5, 2, 4],
//     [1, 9, 8, 4],
//     'test'
// ];
// ​
// //console.log(arr[1][2][0]);
// ​
// for (const item of arr) {
//     if (typeof item === 'object') {
//    // if (Array.isArray(item)) {
//         for (const item1 of item) {
//             console.log(item1);
//         }
//     } else {
//         console.log(item);
//     }
// }
// ​
// console.log(arr);



/*-----------LECTION TASK THIS---------*/

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
  

//   /* -------------------TASK-----------*/

//   const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
    
//     getOrdersLog() {
//         const a = this.orders
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
//   console.log(historyService.getOrdersLog("(=ﾟ㉨ﾟ=) ▄︻┻┳━ ·...`. Biubiubiu"));