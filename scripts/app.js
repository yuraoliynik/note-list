import {notes} from '../data';
import tools from '../tools';

const noteTableBody = document.querySelector('.note-table-body');
const summaryTableBody = document.querySelector('.summary-table-body');

const activeNotes = notes.filter(note => note.archive === 0);
const archiveNotes = notes.filter(note => note.archive === 1);

activeNotes.map(note => {
    const noteRow = noteTableBody.appendChild(document.createElement('div'));
    noteRow.className = 'note-table-row';

    for (const property in note) {
        if (property !== 'archive') {
            const noteColumn = noteRow.appendChild(document.createElement('div'));
            noteColumn.className = 'note-table-column';
            noteColumn.innerText = note[property];
        }
    }
});

const summaryNotes = {
    noteCategory: '',
    active: '',
    archive: ''
}

activeNotes.map(note => {
    const noteRow = noteTableBody.appendChild(document.createElement('div'));
    noteRow.className = 'note-table-row';

    for (const property in note) {
        if (property !== 'archive') {
            const noteColumn = noteRow.appendChild(document.createElement('div'));
            noteColumn.className = 'note-table-column';
            noteColumn.innerText = note[property];

        }
    }
})

console.log(tools.findDates());
