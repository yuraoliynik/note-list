import Cell from '../components/Cell.js';
import {noteActions} from '../constants';
import Row from '../components/Row.js';

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

    const note = {...noteObject};
    delete note.id;

    const row = Row(
        noteRow,
        classNameRow,
        classNameCell,
        note
    );

    row.id = index;

    noteListActions.forEach(actionName => {
        const sell = Cell(
            row,
            classNameCell,
            actionName
        );

        sell.dataset.action = actionName;
    })

    return noteRow;
};
