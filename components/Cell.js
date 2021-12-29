export default function Cell(
    parentElement,
    className = '',
    innerText= ''
) {
    const cell = parentElement.appendChild(document.createElement('div'));

    if (className) {
        cell.className = className;
    }

    cell.innerText = innerText;

    return cell;
};
