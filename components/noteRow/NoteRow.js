import Cell from '../cell/Cell.js';
import {noteActions} from '../../constants';
import Row from '../row/Row.js';

const noteListActions = [
    noteActions.EDIT,
    noteActions.ARCHIVE,
    noteActions.DELETE,
];

export default function NoteRow(
    parentElement,
    classNameRow = '',
    classNameCell = '',
    noteObject = {},
    index = 0
) {
    const noteRow = parentElement.appendChild(document.createElement('div'));
    noteRow.className = classNameRow;

    const note = {...noteObject};
    delete note.id;

    Row(
        noteRow,
        'note-table__data-block',
        classNameCell,
        note
    );

    const actionBlock = noteRow.appendChild(document.createElement('div'));
    actionBlock.className = 'note-table__action-block';

    noteListActions.forEach(actionName => {
        const sell = Cell(
            actionBlock,
            `${classNameCell} cursor_pointer`,
            actionName
        );

        sell.id = index.toString();
        sell.dataset.action = actionName;
    })

    return noteRow;
};
