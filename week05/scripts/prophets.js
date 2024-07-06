const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphets() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphets();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let dob = document.createElement('p');
        let place = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent += `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.append(fullName);
        card.append(dob);
        card.append(place);
        card.append(portrait);

        cards.append(card);
    });
}