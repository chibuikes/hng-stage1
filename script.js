const arr=['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday']
console.log(arr)
const date=new Date()
const now=Date.now()
console.log(now, date.getDay())
const arr1= document.getElementById('day')
const arr2= document.getElementById('time')


setInterval(()=>{
    arr1.innerText=arr[date.getDay()]
    arr2.innerText=String(Date.now())
},1000)