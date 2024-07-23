'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (const element of btnOpenModal){
    console.log(element.addEventListener('click', openModal));
};


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); 

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    };
});
