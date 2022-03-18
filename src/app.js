"use strict";
const input = document.querySelector('input');
const valueResult = document.querySelector('#valueResult');
const progresBar = document.querySelector('.progress-bar');
const box = document.querySelector('#box');
const period = document.querySelector('#period');
discount();
function diplayValue() {
    valueResult.innerText = discount();
    progresBar.style.width = `${input.value}%`;
}
function discount() {
    if (box.checked) {
        valueResult.innerText = (Number(input.value) * 0.75).toFixed(2);
        period.innerText = 'year';
        return (Number(input.value) * 0.75).toFixed(2);
    }
    else {
        valueResult.innerText = (Number(input.value)).toFixed(2);
        period.innerText = 'month';
        return Number(input.value).toFixed(2);
        ;
    }
}
input === null || input === void 0 ? void 0 : input.addEventListener('input', diplayValue);
box.addEventListener('change', discount);
