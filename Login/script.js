const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const bthPopup = document.querySelector('.bthLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => wrapper.classList.add('active'));
loginLink.addEventListener('click', () => wrapper.classList.remove('active'));
bthPopup.addEventListener('click', () => wrapper.classList.add('active-popup'));
iconClose.addEventListener('click', () => wrapper.classList.remove('active-popup'));
// Show the quote box on page load
window.onload = function () {
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.style.display = "block"; // Show the box

    // Hide it after 5 seconds
    setTimeout(function () {
        quoteBox.style.display = "none";
    }, 20000); 
};
