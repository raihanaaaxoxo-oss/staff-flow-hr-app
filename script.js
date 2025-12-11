const toggleButton = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  content.classList.toggle('full');
});

