const newsletterSubmit = document.querySelector('#newsletter__submit'); 
const newsletterModal = document.querySelector('#newsletter__modal');
const newsletterModalCloseIcon = document.querySelector('#newsletter__modal__icon-close');

/* ----- Opening and closing modal ----- */

newsletterSubmit.addEventListener("click", ()=>{
   newsletterModal.showModal();
});

newsletterModalCloseIcon.addEventListener("click", ()=>{
   newsletterModal.close();
});

/* ----- Preventing default function of form's submit button ----- */
const newsletterForm = document.querySelector('#newsletter__form');
newsletterForm.addEventListener('submit', preventDefault);

function preventDefault(event) {
   event.preventDefault();
};