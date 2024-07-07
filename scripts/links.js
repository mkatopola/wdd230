// Base url
const baseURL = "https://mkatopola.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

// asynch function to get links data
async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching the links:', error);
    }
}

function displayLinks(weeks) {
    const ulLinks = document.querySelector('#links');

    weeks.forEach(week => {
        let li = document.createElement('li');
        li.textContent = week.week + ": ";

        week.links.forEach(link => {
            let a = document.createElement('a');
            a.setAttribute('href', link.url);
            a.setAttribute('target', '_blank');
            a.textContent = link.title + " | ";

            li.appendChild(a);
        });

        ulLinks.appendChild(li);
    });
}

getLinks();
