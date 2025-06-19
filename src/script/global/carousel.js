const carousel = document.querySelector(".carousel")
const itemsContainer = document.querySelector(".carousel-items")
const items = Array.from(itemsContainer.children)

let baseSpeed = 1
let speed = baseSpeed
let isPaused = false
let position = 0
let totalWidth = 0
let containerWidth = carousel.clientWidth
let disableOnMobile = false
let currentIndex = 0

/* Percorre o array de itens criando um clone
   e os anexando no final do container */
function duplicateItems() {
    items.forEach(item => {
        const clone = item.cloneNode(true)
        itemsContainer.appendChild(clone)
    })
}

/* Converte os itens do container em um array
   real. Permite percorrer o array somando os
   valores */
function calculateTotalWidth() {
    totalWidth = Array.from(itemsContainer.children).reduce((acumulator, item) => acumulator + item.offsetWidth + 20, 0)
    itemsContainer.style.width = `${totalWidth}px`
}

/* Verifica se o carrossel deve estar desativado */
function isCarouselDisabled() {
    return disableOnMobile && window.innerWidth < 780
}

/* Atualiza a classe no DOM com base no estado */
function updateCarouselState() {
    const disabled = isCarouselDisabled()
    document.querySelector(".carousel-container").classList.toggle("desativado", disabled)
    return disabled
}

function animateScroll() {
    if (!isPaused && !isCarouselDisabled()) {
        position -= speed

        const firstItem = itemsContainer.firstElementChild
        if (position < -firstItem.offsetWidth - 20) {
            itemsContainer.appendChild(firstItem)
            position += firstItem.offsetWidth + 20
        }

        itemsContainer.style.transform = `translateX(${position}px)`
    }

    requestAnimationFrame(animateScroll)
}

function updateItemSize() {
    const disabled = updateCarouselState()
    if (disabled) {
        const itemWidth = window.innerWidth - (2 * 32)
        itemsContainer.style.width = `${itemWidth}px`
        position = 0
        currentIndex = 0
        itemsContainer.style.transform = "translateX(0px)"
    } else {
        calculateTotalWidth()
    }
}

carousel.addEventListener("mouseenter", () => {
    isPaused = true
    let start = speed
    let end = 0
    let duration = 300
    let startTime = null

    function smoothStop(time) {
        if (!startTime) startTime = time
        let progress = Math.min((time - startTime) / duration, 1)
        speed = start + (end - start) * progress

        if (progress < 1) requestAnimationFrame(smoothStop)
    }

    requestAnimationFrame(smoothStop)
})

carousel.addEventListener("mouseleave", () => {
    isPaused = false
    let start = speed
    let end = baseSpeed
    let duration = 300
    let startTime = null

    function smoothResume(time) {
        if (!startTime) startTime = time
        let progress = Math.min((time - startTime) / duration, 1)
        speed = start + (end - start) * progress

        if (progress < 1) requestAnimationFrame(smoothResume)
    }

    requestAnimationFrame(smoothResume)
})

document.addEventListener("DOMContentLoaded", () => {
    if (carousel.hasAttribute("data-speed")) {
        baseSpeed = parseFloat(carousel.getAttribute("data-speed")) || baseSpeed
        speed = baseSpeed
    }

    if (carousel.hasAttribute("data-disable-mobile")) {
        disableOnMobile = carousel.getAttribute("data-disable-mobile") === "true"
    }

    const nextButton = document.querySelector(".next-button")
    const prevButton = document.querySelector(".prev-button")

    if (nextButton && prevButton) {
        nextButton.addEventListener("click", goToNextItem)
        prevButton.addEventListener("click", goToPrevItem)
    }

    // ⚠️ Aplica corretamente o estado inicial do carrossel
    updateItemSize()
})

function goToNextItem() {
    if (!isCarouselDisabled()) return
    const itemWidth = itemsContainer.children[0].offsetWidth + 27
    currentIndex = (currentIndex + 1) % itemsContainer.children.length
    itemsContainer.style.transform = `translateX(${-currentIndex * itemWidth}px)`
}

function goToPrevItem() {
    if (!isCarouselDisabled()) return
    const itemWidth = itemsContainer.children[0].offsetWidth + 27
    currentIndex = (currentIndex - 1 + itemsContainer.children.length) % itemsContainer.children.length
    itemsContainer.style.transform = `translateX(${-currentIndex * itemWidth}px)`
}

window.addEventListener("resize", updateItemSize)

duplicateItems()
calculateTotalWidth()
requestAnimationFrame(animateScroll)
