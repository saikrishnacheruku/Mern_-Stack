/*console.log('one')
console.log("two")
console.log('three')
console.log('four')

setTimeout(()=>
{
    console.log('timer 1')
},7000)

setTimeout(()=>
{
    console.log('timer 2')
},0)

console.log('one')
console.log("two")
console.log('three')
console.log('four')

//for(var i=0;i<100;i++)
//{
  //  console.log(i)
//}

let value=new Promise((resolve,reject)=>
{   setTimeout(()=>{
    resolve('hello'),3000

})

})
setTimeout(()=>{
    console.log(value)
},3000)
//console.log(value)*/

let response=fetch('https://jsonplaceholder.typicode.com/users').then(data=>{
    console.log(data)
})
 

setTimeout(()=>{
    const data=response
   // const data=data.json()
    console.log(data)
},2000)
