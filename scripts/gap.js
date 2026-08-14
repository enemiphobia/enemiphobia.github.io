document.addEventListener('DOMContentLoaded', () => {
const soloNote = document.querySelector('.solo-note-child');
const footerList = document.querySelector('footer ul');

if (!soloNote || !footerList) return;

const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
        const currentWidth = entry.contentRect.width;

        //Math.max(currentWidth-100, 20);
        const calculatedGap = currentWidth-110;

        footerList.style.setProperty('--dynamic-footer-gap', `${calculatedGap}px`);
    }
  });

  resizeObserver.observe(soloNote);
});