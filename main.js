let section = document.querySelector(".section");
let toggle = document.querySelector(".section .header .mode .toggle");

toggle.onclick = function () {
    section.classList.toggle("active")
}
