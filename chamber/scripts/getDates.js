document.addEventListener('DOMContentLoaded', function () {
    // Set footer copyright
    var currentYear = new Date().getFullYear();
    var footerCopyright = document.querySelector("footer p:first-child");
    if (footerCopyright) {
        footerCopyright.innerHTML = "&copy;" + currentYear + " Moffat Katopola | Malawi <span class='flag-icon'><img src='images/flag-icon.webp' alt='Malawi Flag'></span>";
    } else {
        console.error('Element "footer p:first-child" not found.');
    }

    // Set visit message if element exists
    const visitMessage = document.getElementById('visit-message');

    if (visitMessage) {
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
    } else {
        console.error('Element with id "visit-message" not found. Skipping visit message update.');
    }

    // Set last modified date
    var lastModified = document.lastModified;
    var lastModifiedParagraph = document.querySelector("#lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = "Last Modification: " + lastModified;
    } else {
        console.error('Element with id "lastModified" not found.');
    }
});
