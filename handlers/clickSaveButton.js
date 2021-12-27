import {Note} from '../classes';

export default function clickSaveButton() {
    const createForm = document.querySelector('.create-form');
    createForm.style.display = 'none';

    const createButton = document.querySelector('.create-button-wrap');
    createButton.style.display = 'flex';

    const inputs = document.getElementsByClassName('form-input');

    const name = inputs[0].value;

    const created = new Date(inputs[1].value);

    const category = inputs[2].value;

    const content = inputs[3].value;

    const note = new Note(
        name,
        created,
        category,
        content
    );

    const noteTableBody = document.querySelector('.note-table-body');

    const noteRow = noteTableBody.appendChild(document.createElement('div'));
    noteRow.className = 'note-table-row';

    for (const property in note) {
        if (property !== 'archive') {
            const noteColumn = noteRow.appendChild(document.createElement('div'));
            noteColumn.className = 'note-table-column';
            noteColumn.innerText = note[property];
        }
    }
};
