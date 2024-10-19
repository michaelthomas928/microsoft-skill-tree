document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            alert(`You selected: ${node.id.replace('-', ' ')}`);
        });
    });
});
