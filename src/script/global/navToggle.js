function navToggle() {
    const nav = document.getElementById("header")
    nav.classList.toggle("open")
}

document.getElementById("menu")
    .addEventListener("click", navToggle)

document.getElementById("close-menu")
    .addEventListener("click", navToggle)
