document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main")
    const themeClass = [...main.classList].find(cls =>
        ["tech", "gestao", "comunicacao", "academica"].includes(cls)
    );
    if (themeClass) {
        document.body.setAttribute("data-theme", themeClass)
    }
})
