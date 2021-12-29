import Row from './Row.js';
import Cell from './Cell.js';
import {noteActions} from '../constants';

const columnNames = [
    'Name',
    'Created',
    'Category',
    'Content',
    'Dates',
    'Action'
];

export default function ArchiveNoteList(
    parentElement,
    classNameTable = '',
    classNameRow = '',
    classNameCell = '',
    archiveNotesArray = []
) {
    const archiveNoteList = parentElement.appendChild(document.createElement('div'));

    if (classNameTable) {
        archiveNoteList.className = classNameTable;
    }

    const row = archiveNoteList.appendChild(document.createElement('div'));
    row.className = classNameRow;

    columnNames.forEach(columnName => {
        Cell(
            row,
            classNameCell,
            columnName
        );
    });

    archiveNotesArray.forEach((note, index) => {
        const archiveNote = {...note};
        delete archiveNote.category;
        delete archiveNote.id;

        const row = Row(
            archiveNoteList,
            classNameRow,
            classNameCell,
            archiveNote
        );

        row.id = note.id;

        const sell = Cell(
            row,
            classNameCell,
            noteActions.ACTIVE
        );

        sell.dataset.action = noteActions.ACTIVE;
    });

    return archiveNoteList;
};
