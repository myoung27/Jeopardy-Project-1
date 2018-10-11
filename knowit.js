// Get elements
const modal = document.getElementById('simpleModal');
//Get open modal button
const modalBtn = document.getElementById('modalBtn');

//Get Close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick )

// Function to open the modal

function openModal() {
    modal.style.display = 'block';
}
// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}
//Function to close modal upon outside click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
}}