// Base url
const baseURL = "https://mkatopola.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

// Asynchronous function to get links data
async function getLinks() {
    try {
        console.log('Fetching links from:', linksURL);
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        displayLinks(data.weeks); // Access the 'weeks' property
    } catch (error) {
        console.error('Error fetching the links:', error);
    }
}

function displayLinks(weeks) {
    const ulLinks = document.querySelector('#links');
    console.log('ulLinks element:', ulLinks);

    weeks.forEach(week => {
        let li = document.createElement('li');
        li.textContent = week.week + ": ";

        week.links.forEach((link, index) => {
            let a = document.createElement('a');
            a.setAttribute('href', link.url);
            a.setAttribute('target', '_blank');
            a.textContent = link.title;

            li.appendChild(a);

            // Add separator if it's not the last link
            if (index < week.links.length - 1) {
                let separator = document.createTextNode(" | ");
                li.appendChild(separator);
            }
        });

        ulLinks.appendChild(li);
    });

    console.log('Links displayed successfully');
}

getLinks();
