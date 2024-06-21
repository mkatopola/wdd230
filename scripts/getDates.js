document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();

    var footerCopyright = document.querySelector("footer p:first-child");
    footerCopyright.innerHTML = "&copy;" + currentYear + " Moffat Katopola | Malawi <span class='flag-icon'><img src='images/flag-icon.png' alt='Malawi Flag'></span>";

    var lastModified = document.lastModified;
    var lastModifiedParagraph = document.querySelector("#lastModified");
    lastModifiedParagraph.textContent = "Last Modification: " + lastModified;
});

