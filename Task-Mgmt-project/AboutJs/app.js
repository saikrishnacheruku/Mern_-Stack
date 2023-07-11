/*function greet(name='jh0n',age=19)
{
   // console.log('hello world')
    console.log(name,age);
    
}
greet()

function sum(a=1,b=1)
{
    console.log(a+b)

}
sum()

var add=function (a=0,b=0)
{
    var sum=a+b;
    return sum;

}

//console.log(add(20,30))

/*var add1 = (a=1,b=1)=>
{
    return a+b;
}
console.log(add1(20,8)) 

var add=(a=0,b=0)=>a+b 
console.log(add(5,7))

var arr=['hi','sravs','in love']*/

/*var callbackFunction=(element,index)=>{
    console.log(element,index)
}*/

/*var call=(e,i)=>
{
    console.log(e,i)
}*/

//arr.forEach(call)

/*arr.forEach((elememt,index)=>{
    console.log(elememt,index)
});
console.log()*/ 

/*var button=document.querySelector('button')
var input=document.querySelector('input')
var list=document.querySelector('ul')

const call=(event)=>
{
    const inputValue=input.value
    const element=document.createElement('li')
    const textNode=document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)
}*/

/*const call=(event)=>
{
    console.log(event.target)
    console.log(input.value)
}*/
//button.addEventListener('click',call)
//button.addEventListener('cancel',call)

var body =document.querySelector('body')
var button=document.querySelector('button')

const call=(event)=>
{
    body.classList.toggle('dark')
}
button.addEventListener('click',call)
