const verMaisBtn = document.querySelectorAll('#produtos__li-btn');
const produtosModal = document.querySelector('#produtos__modal')
const produtosModalCloseIcon = document.querySelector('#produtos__modal__icon-close');

/* ----- Opening and closing modal ----- */

verMaisBtn.forEach((arrayElement)=>{
   arrayElement.addEventListener("click", (evento)=>{
      produtosModal.showModal();
   })
})

produtosModalCloseIcon.addEventListener("click", (evento)=>{
   produtosModal.close();
})


/* ----- Changing modal product's info ----- */

var modalTitle = document.querySelector('#produtos__modal-title');
var modalDescription = document.querySelector('#produtos__modal-description');
var modalPrice = document.querySelector('#produtos__modal-price');
var modalImg = document.querySelector('#produtos__modal-img')

verMaisBtn.forEach((arrayElement)=>{
   arrayElement.addEventListener("click", (evento)=>{
      changeProduct(evento.target.parentNode.children[0].textContent, evento.target.parentNode.children[1].textContent, evento.target.parentNode.children[2].textContent, evento.target.parentNode.parentNode.children[0].attributes.src.value)
      console.log(evento.target.parentNode.parentNode.children[0].attributes.src)
   })
})

function changeProduct(title, description, price, img) {
   modalTitle.textContent = title;
   modalDescription.textContent = description;
   modalPrice.textContent = price;
   modalImg.src = img;
   console.log(img)
}

/* ----- Preventing default function of form's submit button ----- */
const produtosForm = document.querySelector('#modal__product__form');
const produtosModalSubmit = document.querySelector('#modal__product-submit')
produtosForm.addEventListener('submit', preventDefault);

function preventDefault(event) {
   event.preventDefault();
};

/* ----- Setting form's submit button to close the modal ----- */
produtosModalSubmit.addEventListener("click",(evento)=>{
   produtosModal.close()
})