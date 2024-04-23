//object literals
const mySym=Symbol("Key1")

const jsUser={
    name:"Ganesh",
    [mySym]:"myKey1",
    age:18,
    location:"Pune",
    email:"ganesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

Object.freeze(jsUser)
console.log(jsUser)



console.log("###################")
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
const obj3={5:'a',6:'b'}
const obj4={...obj1,...obj2}
console.log(obj4)


