const cube = document.querySelector('.cube');
const cubeContainer = document.querySelector('#cubeContainer');

let isDragging = false;
let startX, startY;
let currentX = 0;
let currentY = 0;

cubeContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - currentX;
  startY = e.clientY - currentY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  currentX = e.clientX - deltaX;
  currentY = e.clientY - deltaY;

  cube.style.transform = `rotateX(${currentY / 5}deg) rotateY(${-currentX / 5}deg)`;
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
});
