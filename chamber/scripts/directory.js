document.addEventListener('DOMContentLoaded', function () {
  const gridButton = document.getElementById('grid');
  const listButton = document.getElementById('list');
  const display = document.getElementById('display');

  let membersData = []; // Array to store member data

  // Fetch data from members.json
  fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
          membersData = data.members; // Store fetched data in membersData array
          displayMembers(); // Display members initially
      })
      .catch(error => console.error('Error fetching members:', error));

  // Function to display members based on current view (grid or list)
  function displayMembers() {
      // Clear existing content
      display.innerHTML = '';

      // Determine whether to display as grid or list based on current class
      const isGrid = display.classList.contains('grid');

      membersData.forEach(member => {
          const memberSection = document.createElement('section');
          if (isGrid) {
              memberSection.innerHTML = `
                  <img src="images/${member.image}" alt="${member.name}" width="300" height="200" loading="lazy">
                  <h3>${member.name}</h3>
                  <p>${member.address}</p>
                  <p>${member.phone}</p>
                  <p>${member.description}</p>
                  <a href="http://${member.website}" target="_blank">${member.website}</a>
              `;
              memberSection.classList.add('grid-item');
          } else {
              memberSection.innerHTML = `
                  <img src="images/${member.image}" alt="${member.name}" width="300" height="200" loading="lazy">
                  <div>
                      <h3>${member.name}</h3>
                      <p>${member.address}</p>
                      <p>${member.phone}</p>
                      <p>${member.description}</p>
                      <a href="http://${member.website}" target="_blank">${member.website}</a>
                  </div>
              `;
              memberSection.classList.add('list-item');
          }

          display.appendChild(memberSection);
      });
  }

  // Event listeners for grid and list buttons
  gridButton.addEventListener('click', () => {
      display.classList.remove('list');
      display.classList.add('grid');
      gridButton.classList.add('active');
      listButton.classList.remove('active');
      displayMembers(); // Re-display members in grid view
  });

  listButton.addEventListener('click', () => {
      display.classList.remove('grid');
      display.classList.add('list');
      listButton.classList.add('active');
      gridButton.classList.remove('active');
      displayMembers(); // Re-display members in list view
  });
});
