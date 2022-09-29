'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//Will bring all the possible combinations -> Similar to an array but not exactly the same
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function (){
    //We are going to remove a the "hidden" clase from the modal element
    //modal.classList.remove('class1','class2', ...);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const removeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i=0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', removeModal);

overlay.addEventListener('click', removeModal);

//Keyboard events are global events because you listen in the whole document.
// We pass the parameter e (event) to understand the key that was pressed.
document.addEventListener('keydown', function (e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        removeModal();
    }
});