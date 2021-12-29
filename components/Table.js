import Row from './Row.js';

export default function Table(
    parentElement,
    classNameTable = '',
    classNameRow = '',
    classNameCell = '',
    dataArray = []
) {
    const table = parentElement.appendChild(document.createElement('div'));

    if (classNameTable) {
        table.className = classNameTable;
    }

    dataArray.forEach((note, index) => {
        Row(
            table,
            classNameRow,
            classNameCell,
            note
        );
    });

    return table;
};
