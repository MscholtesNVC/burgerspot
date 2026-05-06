// element section 
const fullMenu = document.getElementById("full-menu");
const showMenu = document.getElementById('show-menu');
const closeBtn = document.getElementById("close-btn");

// event listener for  show-menu button
showMenu.addEventListener('click', function () {
    fullMenu.classList.add("show");
});

// event for close-btn element 
closeBtn.addEventListener('click', function () {
    fullMenu.classList.remove("show");
});
