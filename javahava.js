// Task 1
const user = {
    hobby: "gaming",
    premium: true
}
user.hobby = "skydiving";
user.premium = false
user.mood = "Happy"
console.log(user);

const remakeKeys = Object.keys(user)
for (let keys of remakeKeys) {
    console.log(`${keys}:${user[keys]}`)
}
// Task 2
function countProps(object) {
    return Object.keys(user).length
}
console.log(countProps(user))
// Task 3
function findBestEmployee(employees) {
    let bestEmployee = null;
    let maxTasks = 0;
    for (let [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            bestEmployee = name
            maxTasks = tasks
        }
        return bestEmployee
    }
}

const employees = {
    ola: 100000000000000000000,
    barys: 10,
    timaHacker: 12341924783290573498563487956437534534895693485689436834
}

console.log(findBestEmployee(employees))
// Task 4
const salary = {
    tima: 1000,
    ola: 2000,
    barys:3000
}
function countTotalSalary(employees) {
let totalSalary = 0;

for (const salary of Object.values(employees)) {
  totalSalary += salary;
}

return totalSalary;
}

console.log(countTotalSalary(salary))
// Task 5
const products = [
  { name: "Laptop", price: 1500, quantity: 4 },
  { name: "Smartphone", price: 800, quantity: 10 },
  { name: "Tablet", price: 1200, quantity: 5 },
];
function getAllPropValues(arr, nameValue) {
     const values = [];

     for (const object of arr) {
       if (object.hasOwnProperty(nameValue)) {
         values.push(object[nameValue]);
       }
     }

     return values;
}
console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));
// Task 6
function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break;
        }
    }

    return totalPrice;
}

console.log(calculateTotalPrice(products, "Laptop"));
console.log(calculateTotalPrice(products, "Smartphone"));
console.log(calculateTotalPrice(products, "Tablet"));