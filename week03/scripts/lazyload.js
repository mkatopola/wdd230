document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();

    var lastModified = document.lastModified;
    var lastModifiedParagraph = document.querySelector("#lastModified");
    lastModifiedParagraph.textContent = "Last Modification: " + lastModified;
});
