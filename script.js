{/* <span id="temp" class="fa"></span> */}

const tempload = () =>{
    let temp1 = document.getElementById('temp');
    temp1.innerHTML = '&#xf2cb';
    temp1.style.color='white';

setTimeout( () =>{
    temp1.innerHTML = '&#xf2ca';
    temp1.style.color = 'yellow';
}, 1000)

setTimeout( () =>{
    temp1.innerHTML = '&#xf2c9';
    temp1.style.color = 'yellow';
}, 2000)

setTimeout( () =>{
    temp1.innerHTML = '&#xf2c8';
    temp1.style.color = 'greenyellow';
}, 3000)

setTimeout( () =>{
    temp1.innerHTML = '&#xf2c7';
    temp1.style.color = 'red';
}, 4000)

}
tempload();

setInterval(tempload, 5000 , Infinity);