import {notes} from '../data';
import tools from '../tools';
import handlers from '../handlers';

const noteTableBody = document.querySelector('.note-table-body');

const activeNotes = notes.filter(note => note.archive === 0);

activeNotes.forEach((note, index) => {
    const noteRow = noteTableBody.appendChild(document.createElement('div'));
    noteRow.className = 'note-table-row';

    for (const property in note) {
        if (property !== 'archive') {
            const noteColumn = noteRow.appendChild(document.createElement('div'));
            noteColumn.className = 'note-table-column';
            noteColumn.innerText = note[property];
        }
    }

    //start
    // const edit = noteRow.appendChild(document.createElement('div'));
    // edit.innerText = `EDIT ${index}`;
    // edit.onclick = (event) => {
    //     console.log(event.target);
    //     const editForm = document.createElement('div')
    //     noteTableBody.insertBefore(editForm, noteRow.nextSibling);
    //     editForm.className = 'editForm';
    //     editForm.innerText = 'form';
    // }
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
createButton.addEventListener('click', handlers.clickCreateButton);

const saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', handlers.clickSaveButton);
