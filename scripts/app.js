import {notes} from '../data';
import tools from '../tools';

const noteTableBody = document.querySelector('.note-table-body');

const activeNotes = notes.filter(note => note.archive === 0);

activeNotes.forEach(note => {
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

const groupedNotesObj = tools.groupNotesByCategory(notes);

const summarizedNotes = tools.summaryNotesByCategory(groupedNotesObj);

const summaryTableBody = document.querySelector('.summary-table-body');

summarizedNotes.forEach(summaryByCategory => {
    const noteRow = summaryTableBody.appendChild(document.createElement('div'));
    noteRow.className = 'summary-table-row';

    for (const property in summaryByCategory) {
        if (property !== 'notes') {
            const noteColumn = noteRow.appendChild(document.createElement('div'));
            noteColumn.className = 'summary-table-column';
            noteColumn.innerText = summaryByCategory[property];
        }
    }
});

const createButton = document.querySelector('.create-button');
createButton.
console.log(summarizedNotes);
