const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('modal-maximize')
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".botao-maximize").addEventListener("click", function() {
    if (modal.classList.contains('modal-maximize')) {
        modal.classList.remove('modal-maximize')
      } else {
        modal.classList.add('modal-maximize')
      }  
})


