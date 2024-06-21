document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.querySelector("ul").classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            menu.querySelector("ul").classList.remove("active");
            hamburger.classList.remove("open");
        }
    });
});
