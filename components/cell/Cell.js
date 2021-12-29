export default function Cell(
    parentElement,
    className = '',
    innerText = ''
) {
    const cell = parentElement.appendChild(document.createElement('div'));

    if (className) {
        cell.className = className;
    }

    const p = cell.appendChild(document.createElement('p'));
    p.innerText = innerText;

    return cell;
};
