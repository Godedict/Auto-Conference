// Function to open the menu
function openMenu() {
  const menu = document.getElementById('menuList');
  const menuOpenButton = document.getElementById('menuOpen');
  const menuCloseButton = document.getElementById('menuClose');

  // Display the menu and close button
  menu.style.display = 'block';
  menuCloseButton.style.display = 'inline-block';

  // Hide the open button
  menuOpenButton.style.display = 'none';
}

// Function to close the menu
function closeMenu() {
  const menu = document.getElementById('menuList');
  const menuOpenButton = document.getElementById('menuOpen');
  const menuCloseButton = document.getElementById('menuClose');

  // Hide the menu and close button
  menu.style.display = 'none';
  menuCloseButton.style.display = 'none';

  // Display the open button
  menuOpenButton.style.display = 'inline-block';
}

// Add click event listener to the menu open button
document.getElementById('menuOpen').addEventListener('click', openMenu);

// Add click event listener to the menu close button
document.getElementById('menuClose').addEventListener('click', closeMenu);

// Initially hide the close button
document.getElementById('menuClose').style.display = 'none';

const specialGuests = [
  {
    Id: 1,
    name: 'Toshihiro Mibe',
    title: 'CEO of Honda Motor Company',
    photo: './Assets/presenter1.jpeg',
    info: 'Founder of 343 Industries and Develeoped Halos franchise',
  },
  {
    Id: 2,
    name: 'Ola Kallenius',
    title: 'CEO of Mercedes-Benz AG',
    photo: './Assets/presenter2.png',
    info: 'He is the chairman of the board of management of Mercedes-Benz Group, and CEO of Mercedes-Benz.',
  },
  {
    Id: 3,
    name: 'Stephan Winkelmann',
    title: 'CEO of Lamborghini Automobili S.p.A',
    photo: './Assets/presenter3.jpg',
    info: 'He is a German manager and has been President of Lamborghini S.p.A. since December 1, 2020.',
  },
  {
    Id: 4,
    name: 'Akio Toyoda',
    title: 'CEO of Toyota Motor Corporation',
    photo: './Assets/presenter4.jpg',
    info: 'He is a Japanese business executive and the current Chairman of Toyota Motor Corporation.',
  },
  {
    Id: 5,
    name: 'Jim Farley',
    title: 'CEO of Ford Motor Company',
    photo: './Assets/presenter5.jpg',
    info: 'He is the president and CEO of Ford Motor Company, and was appointed to the position effective October 1, 2020.',
  },
  {
    Id: 6,
    name: 'Mary Barra',
    title: 'CEO of General Motors Company',
    photo: './Assets/presenter6.jpg',
    info: 'She is the first female CEO of a Big Three automaker. In December 2013, GM named her to succeed Daniel Akerson as CEO.',
  },
];

const guestContainer = document.querySelector('#guestcontainer');
function generateGuests() {
  specialGuests.forEach((person) => {
    const guests = document.createElement('div');
    guests.className = 'guests';
    guests.innerHTML = `
        <img src="${person.photo}" alt="${person.name}" class="guestImg">
        <div class="guestDetail">
            <h3 class="guestName">${person.name}</h3>
            <h5 class="guestTitle">${person.title}</h5>
            <i class="line"></i>
            <p class="guestDesc">${person.info}</p>
        </div>
        `;
    guestContainer.appendChild(guests);
  });
}

window.onload = () => {
  generateGuests();
};