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
function countProps(obj) {
    return Object.keys(user).length
}
console.log(countProps(user))
// Task 3
// function findBestEmployee(employees) {
//     let bestEmployee = null;
//     let maxTasks = 0;
//     for (let [name,tas])
// }

// const employees = {
//     ola: 100000000000000000000,
//     barys: 10,
//     timaHacker: 12341924783290573498563487956437534534895693485689436834
// }

// console.log(findBestEmployee(employees))