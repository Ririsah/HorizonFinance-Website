const btn_transf = document.querySelector('.transf');
const btn_loan = document.querySelector('.loan');
const btn_close = document.querySelector('.close');

const div_transf = document.querySelector('.operation-div-1');
const div_loan = document.querySelector('.operation-div-2');
const div_close = document.querySelector('.operation-div-3');





const addActiveBtn = function (selected, btn2, btn3) {
    selected.classList.add('operations-btn-active');
    btn2.classList.remove('operations-btn-active');
    btn3.classList.remove('operations-btn-active');
}

const addActiveDiv = function (selected, div2, div3) {
    selected.classList.add('operation-div-active');
    div2.classList.remove('operation-div-active');
    div3.classList.remove('operation-div-active');
};

btn_transf.addEventListener('click', function () {
    addActiveBtn(btn_transf, btn_loan, btn_close);
    addActiveDiv(div_transf, div_loan, div_close);
});

btn_loan.addEventListener('click', function () {
    addActiveBtn(btn_loan, btn_transf, btn_close);
    addActiveDiv(div_loan, div_transf, div_close);
});

btn_close.addEventListener('click', function () {
    addActiveBtn(btn_close, btn_loan, btn_transf);
    addActiveDiv(div_close, div_loan, div_transf);
});