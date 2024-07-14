const urlMembers = 'https://mkatopola.github.io/wdd230/chamber/data/members.json';

async function getMembers() {
    const response = await fetch(urlMembers);
    const data = await response.json();
    displayPromos(data.members);
}

function displayPromos(members) {
    // Filter members by membership level
    let gold = members.filter(member => member.membershipLevel === 'Gold');
    let silver = members.filter(member => member.membershipLevel === 'Silver');

    // Select a random Gold member
    let goldRandomPosition = Math.floor(Math.random() * gold.length);
    let goldMember = gold[goldRandomPosition];
    
    // Select a random Silver member
    let silverRandomPosition = Math.floor(Math.random() * silver.length);
    let silverMember = silver[silverRandomPosition];

    // Display Gold member
    let goldCard = document.querySelector('.gold');
    goldCard.innerHTML = `
        <h3>${goldMember.name}</h3>
        <img src="${goldMember.image}" alt="${goldMember.name}">
        <p>${goldMember.description}</p>
        <p>${goldMember.phone} <br> ${goldMember.address}</p>
        <a href="http://${goldMember.website}" target="_blank">${goldMember.website}</a>
    `;

    // Display Silver member
    let silverCard = document.querySelector('.silver');
    silverCard.innerHTML = `
        <h3>${silverMember.name}</h3>
        <img src="${silverMember.image}" alt="${silverMember.name}">
        <p>${silverMember.description}</p>
        <p>${silverMember.phone} <br> ${silverMember.address}</p>
        <a href="http://${silverMember.website}" target="_blank">${silverMember.website}</a>
    `;
}

getMembers();
