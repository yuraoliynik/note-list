import handlers from '../handlers';
import {notesCollection} from '../data';
import tools from '../tools';


//
// function onClick(event) {
//     let action = event.target.dataset.action;
//     if (action) {
//         this[action]();
//     }
// }

const noteTableBody = document.querySelector('.note-table-body');

const activeNotes = notesCollection.getData().filter(note => note.archive === 0);
activeNotes.forEach((note, index) => {
    const noteRow = noteTableBody.appendChild(document.createElement('div'));
    noteRow.className = 'note-table-row';

    for (const property in note) {
        const noteColumn = noteRow.appendChild(document.createElement('div'));
        noteColumn.className = 'note-table-column';
        noteColumn.innerText = note[property];
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

const groupedNotesObj = tools.groupNotesByCategory(notesCollection.getData());

const summarizedNotes = tools.summaryNotesByCategory(groupedNotesObj);

const summaryTableBody = document.querySelector('.summary-table-body');

summarizedNotes.forEach(summaryByCategory => {
    const noteRow = summaryTableBody.appendChild(document.createElement('div'));
    noteRow.className = 'summary-table-row';
    // console.log(summaryByCategory);

    for (const property in summaryByCategory) {
        if (property !== 'notes') {
            const noteColumn = noteRow.appendChild(document.createElement('div'));
            noteColumn.className = 'summary-table-column';
            noteColumn.innerText = summaryByCategory[property];
        }
    }
});


const a = {
    save()
    {
        alert('сохраняю');
    },

    create() {
        alert('загружаю');
        summarizedNotes.forEach(summaryByCategory => {
            const noteRow = summaryTableBody.appendChild(document.createElement('div'));
            noteRow.className = 'summary-table-row';
            // console.log(summaryByCategory);

            for (const property in summaryByCategory) {
                if (property !== 'notes') {
                    const noteColumn = noteRow.appendChild(document.createElement('div'));
                    noteColumn.className = 'summary-table-column';
                    noteColumn.innerText = summaryByCategory[property];
                }
            }
        });
    },

    search() {
        alert('ищу');
    }
};

document.addEventListener('click', (event) => {
    console.log(event.target.dataset.action);
    let action = event.target.dataset.action;
    if (action) {
        a[action]();
    }
});

const createButton = document.querySelector('.create-button');
createButton.addEventListener('click', handlers.clickCreateButton);

const saveButton = document.querySelector('.save-button');
saveButton.addEventListener('click', handlers.clickSaveButton);

const noteTable = document.querySelector('.note-table');
noteTable.addEventListener('click', (event) => {
    console.log(event.target.dataset.action);
});
