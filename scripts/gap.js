document.addEventListener('DOMContentLoaded', () => {
const soloNote = document.querySelector('.solo-note-child');
const footerList = document.querySelector('footer ul');

if (!soloNote || !footerList) return;

const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
        const currentWidth = entry.contentRect.width;

        const calculatedGap = Math.max(currentWidth * 0.60, 100);

        footerList.style.setProperty('--dynamic-footer-gap', `${calculatedGap}px`);
    }
  });

  resizeObserver.observe(soloNote);
});