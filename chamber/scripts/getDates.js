document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();

    var lastModified = document.lastModified;
    var lastModifiedParagraph = document.querySelector("#lastModified");
    lastModifiedParagraph.textContent = "Last Modification: " + lastModified;
});

// scripts/getDates.js

document.addEventListener('DOMContentLoaded', function () {
    // Display visit message
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (lastVisit) {
        const daysBetween = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysBetween < 1) {
            visitMessage.textContent = 'Back so soon! Awesome!';
        } else if (daysBetween === 1) {
            visitMessage.textContent = 'You last visited 1 day ago.';
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    } else {
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    }

    localStorage.setItem('lastVisit', currentVisit);
});
