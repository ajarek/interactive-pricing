const input = document.querySelector('input')as HTMLInputElement;
const valueResult =document.querySelector('#valueResult')as HTMLSpanElement;
const progresBar = document.querySelector('.progress-bar')as HTMLSpanElement;
const box = document.querySelector('#box')as HTMLInputElement;
const period = document.querySelector('#period')as HTMLSpanElement;
discount();
function diplayValue() {
  valueResult.innerText= discount();
  progresBar.style.width = `${input.value}%`;
}

function discount() {
  if(box.checked){
    valueResult.innerText= (Number(input.value) * 0.75).toFixed(2)
    period.innerText = 'year';
    return (Number(input.value) * 0.75).toFixed(2);
  }else{
    valueResult.innerText= (Number(input.value)).toFixed(2)
    period.innerText = 'month';
    return Number(input.value).toFixed(2);;
  }
}

input?.addEventListener('input',diplayValue)

box.addEventListener('change',discount)
  
