const layers = document.querySelectorAll('.layer');
const infoBox = document.getElementById('arch-info');

layers.forEach(layer => {
  layer.addEventListener('mouseenter', () => {
    infoBox.innerHTML = `
      <strong>${layer.dataset.title}</strong>
      <p>${layer.dataset.desc}</p>
      ${layer.dataset.link ? '<em>Click to open related repository</em>' : ''}
    `;
  });

  layer.addEventListener('click', () => {
    if (layer.dataset.link) {
      window.open(layer.dataset.link, '_blank', 'noopener');
    }
  });
});
