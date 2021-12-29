import Cell from '../components/Cell.js';

export default function Row(
    parentElement,
    classNameRow = '',
    classNameCell = '',
    rowObject = {}
) {
    const row = parentElement.appendChild(document.createElement('div'));

    if (classNameRow) {
        row.className = classNameRow;
    }

    for (const property in rowObject) {
        Cell(
            row,
            classNameCell,
            rowObject[property]
        );
    }

    return row;
};
