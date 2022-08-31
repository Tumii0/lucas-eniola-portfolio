const openModal = document.getElementById("open-modal")
const openModal2 = document.getElementById("open-modal2")

const overlay =  document.getElementById("overlay")
openModal.addEventListener("click", function(){
    overlay.style.display = "block"
})
openModal2.addEventListener("click", function(){
    overlay.style.display = "block"
})

const closeModal =  document.getElementById("close-modal")
closeModal.addEventListener("click", function(){
    overlay.style.display = "none"
})