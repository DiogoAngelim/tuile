document.addEventListener('DOMContentLoaded', () => {
    const parents = document.querySelectorAll('.editor-visual-editor');
    parents.forEach(parent => {
      const child = parent.firstChild;
        while (child) {
            if (child.tagName === 'style') {
              parent.removeChild(parent.firstChild);
            }
        }
    });
});