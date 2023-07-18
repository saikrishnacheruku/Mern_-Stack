/*let response =fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
    data.array.forEach(element => {
        
    });
})*/
const list=document.querySelector('ul')
let arr=['one','two','three','four']

/*arr.forEach(chore =>{
    const element=document.createElement('li')
    const textNode=document.createTextNode(chore)
    element.appendChild(textNode)
    console.log(element)
    element.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML)
        e.target.remove()

    })
    list.appendChild(element)
}) */


const fetchdata=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data)
}

fetchdata()