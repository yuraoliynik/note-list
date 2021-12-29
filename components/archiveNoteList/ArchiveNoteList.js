import Cell from '../cell/Cell.js';
import noteActions from '../../constants/noteAction.enum.js';
import Row from '../row/Row.js';

const columnNames = [
    'Name',
    'Created',
    'Content',
    'Dates',
    'Action'
];

export default function ArchiveNoteList(
    parentElement,
    classNameTable = '',
    archiveNotesArray = []
) {
    const archiveNoteList = parentElement.appendChild(document.createElement('div'));

    if (classNameTable) {
        archiveNoteList.className = classNameTable;
    }

    const row = archiveNoteList.appendChild(document.createElement('div'));
    row.className = 'archive-table__header';

    columnNames.forEach(columnName => {
        Cell(
            row,
            'archive-table__cell',
            columnName
        );
    });

    archiveNotesArray.forEach(note => {
        const archiveNote = {...note};
        delete archiveNote.category;
        delete archiveNote.id;

        const row = Row(
            archiveNoteList,
            'archive-table__row',
            'archive-table__cell',
            archiveNote
        );

        const sell = Cell(
            row,
            'archive-table__cell cursor_pointer',
            noteActions.ACTIVE
        );

        sell.id = note.id;
        sell.dataset.action = noteActions.ACTIVE;
    });

    return archiveNoteList;
};
