function one()
{
    const username="Ganesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

// function chai()
// {
//     console.log(this)
// }
// const chai=() =>{
//     let username="Ganesh"
//     console.log(this)
// }
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }


const addTwo=(num1,num2)=>(num1+num2)

console.log(addTwo(3,4))
