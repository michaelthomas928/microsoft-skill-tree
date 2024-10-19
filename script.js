document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');
    const findPathButton = document.getElementById('find-path');
    const startSelect = document.getElementById('start');
    const endSelect = document.getElementById('end');

    const tree = {
        "onboard": ["exchange-online", "sharepoint", "intune", "teams", "defender-endpoint", "office-apps", "purview"],
        "teams": ["teams-phone", "teams-premium"],
        "defender-endpoint": ["defender-cloud", "defender-identity"]
    };

    findPathButton.addEventListener('click', () => {
        const start = startSelect.value;
        const end = endSelect.value;
        clearHighlights();
        const path = findPath(start, end, tree);
        highlightPath(path);
    });

    function findPath(start, end, tree, path = []) {
        path.push(start);
        if (start === end) return path;
        if (!tree[start]) return null;

        for (let child of tree[start]) {
            const result = findPath(child, end, tree, [...path]);
            if (result) return result;
        }
        return null;
    }

    function highlightPath(path) {
        if (!path) {
            alert('No path found!');
            return;
        }
        path.forEach(id => {
            document.getElementById(id).classList.add('highlight');
        });
    }

    function clearHighlights() {
        nodes.forEach(node => node.classList.remove('highlight'));
    }

    document.getElementById('onboard').classList.add('active');
});
