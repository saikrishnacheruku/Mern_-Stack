//const a=document.getElementsByTagName('input')
//const b=document.getElementsByTagName('input')
const a=document.querySelectorAll('input')[0]
const b=document.querySelectorAll('input')[1]
const c=document.querySelectorAll('input')
const add=document.querySelector('#add')
const multiply=document.querySelector('#mul')
const sub=document.querySelector('#sub')

const result=document.querySelector('.res')
/*const sum=()=>{
    const result=in
}*/

/*add.addEventListener('click' ,()=>{
    const num1=parseInt(a.value)
    const num2=parseInt(b.value)
   // const num3=parseInt(c.value)
    const res=num1+num2
    console.log(res)
    result.textContent=res

})
multiply.addEventListener('click',()=>{
    //const num1=parseInt(a.value)
   // const num2=parseInt(b.value)
    const res=parseInt(a.value)*parseInt(b.value)
    console.log(res)

    result.innerHTML=res
})

sub.addEventListener('click',()=>{
    const res=parseInt(a.value)-parseInt(b.value)

    result.innerHTML=res
})

const caluclate=(event,operation)=>
{
    console.log(event.target)
    if(operation=='add')
    {
        console.log('adding')
    }
    else if(operation=='multiply'){
        console.log("multplying")
        
    }
}*/
const calculate=(event,operation)=>
{
    switch(operation){
        case "add":
            result.innerHTML=parseInt(a.value)+parseInt(b.value)
            break
        case 'multiply':
            result.innerHTML=parseInt(a.value)*parseInt(b.value)
            break
        case 'sub':
            result.innerHTML=parseInt(a.value)-parseInt(b.value)
            break
        default:
            result.innerHTML='provide a valid output'
    }
}

add.addEventListener('click',(event,operation)=>{
    calculate(event,'add')
})
multiply.addEventListener('click',(event)=>calculate(event,'multiply'))
sub.addEventListener('click',(event)=>calculate(event,'sub'))


//console.log(add,multiply)

var arr=[2,3.4,'hi']
console.log(arr.splice(1,4))