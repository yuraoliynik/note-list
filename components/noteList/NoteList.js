import NoteRow from '../noteRow/NoteRow.js';

export default function NoteList(
    parentElement,
    notesArray = []
) {
    const noteList = parentElement.appendChild(document.createElement('div'));
    noteList.className = 'note-table__list';

    notesArray.forEach(note => {
        NoteRow(
            noteList,
            'note-table__row table__row',
            'note-table__cell table__cell',
            note,
            note.id
        )
    });

    return noteList;
};
