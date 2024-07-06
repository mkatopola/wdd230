const modeButton = document.querySelector(".mode");
const main = document.querySelector("main");
const formArea = document.getElementById("form-area");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input, select, textarea");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("⚫")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        if (formArea) {
            formArea.style.background = "#333";
            formArea.style.color = "#fff";
        }
        labels.forEach(label => {
            label.style.color = "#fff";
        });
        inputs.forEach(input => {
            input.style.background = "#555";
            input.style.color = "#fff";
            input.style.border = "1px solid #fff";
        });
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        if (formArea) {
            formArea.style.background = "#fff";
            formArea.style.color = "#000";
        }
        labels.forEach(label => {
            label.style.color = "#000";
        });
        inputs.forEach(input => {
            input.style.background = "#fff";
            input.style.color = "#000";
            input.style.border = "1px solid #000";
        });
        modeButton.textContent = "⚫";
    }
});
