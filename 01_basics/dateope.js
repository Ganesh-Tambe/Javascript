let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)


console.log("###################")
let myCreatedDate=new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString())

console.log("###################")
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

console.log("###################")
let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log("###################")
newDate.toLocaleString('default',{
    weekday:"long",
    
})



