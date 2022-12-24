let add = document.querySelector('#add'),
minus = document.querySelector('#minus'),
multiply = document.querySelector('#multiply'),
divide = document.querySelector('#divide'),
equal = document.querySelector('#equal'),
clear = document.querySelector('#clear'),
value = document.querySelector('#value');

let result = 0;
 value.innerText=result;


const Render = () => {
    value.innerText=result;

}


const Clear = () =>{
    result=0;
    Render()
}
console.log(Clear)







clear.addEventListener('click',Clear);