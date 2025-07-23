document.querySelectorAll('div.expando-button').forEach(el => el.click());


const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
document.body.prepend(gridContainer); // You can use appendChild instead if you prefer

// STEP 2: Select all .crosspost-preview-content elements
const items = document.querySelectorAll('.media-embed');

// STEP 3: Move each item into the new grid container
items.forEach(item => {
  gridContainer.appendChild(item);
});

// STEP 4: Inject CSS styles for the grid layout
const style = document.createElement('style');
style.textContent = `
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    z-index: 9999;
    position: relative;
  }
`;
document.head.appendChild(style);
