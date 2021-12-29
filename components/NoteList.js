import NoteRow from './NoteRow.js';

export default function NoteList(
    parentElement,
    classNameTable = '',
    classNameRow = '',
    classNameCell = '',
    notesArray = []
) {
    const noteList = parentElement.appendChild(document.createElement('div'));

    if (classNameTable) {
        noteList.className = classNameTable;
    }

    notesArray.forEach((note, index) => {
        NoteRow(
            noteList,
            classNameRow,
            classNameCell,
            note,
            note.id
        )
    });

    return noteList;
};
