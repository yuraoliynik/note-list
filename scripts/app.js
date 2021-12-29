import {notesCollection} from '../data';
import NoteList from '../components/NoteList.js';
import NoteForm from '../components/noteForm/NoteForm.js';
import {Note} from '../classes';
import SummaryList from '../components/SummaryList.js';
import {noteActions, noteCategoryNames} from '../constants';
import tools from '../tools';
import ArchiveNoteList from '../components/ArchiveNoteList.js';


const noteTableBody = document.querySelector('.note-table-body');

const notes = notesCollection.getData();
const activeNotes = notes.filter(note => note.archive === 0);

let noteList = NoteList(
    noteTableBody,
    '',
    'note-table-row',
    'note-table-column',
    activeNotes
);

const summaryTableBody = document.querySelector('.summary-table-body');
const summaryNotes = notesCollection.doSummary();

let summaryList = SummaryList(
    summaryTableBody,
    'summary-list',
    'summary-table-row',
    'summary-table-column',
    summaryNotes
);

const createButton = document.querySelector('.create-button');
createButton.dataset.action = noteActions.CREATE;

let noteForm;
let noteIndex;

const app = {
    [noteActions.ACTIVE](event) {
        console.log('active');

        const activeNoteIndex = event.target.parentElement.id;

        notesCollection.editData(
            activeNoteIndex,
            {archive: 0}
        );

        _renderListAndSummary();
    },

    [noteActions.ARCHIVE](event) {
        console.log('archive');

        const archiveNoteIndex = event.target.parentElement.id;

        notesCollection.editData(
            archiveNoteIndex,
            {archive: 1}
        );

        _renderListAndSummary();
    },

    [noteActions.CANCEL]() {
        console.log('cancel');

        noteForm = noteForm.remove();

        createButton.hidden = false;
    },

    [noteActions.CREATE]() {
        console.log('create');

        const dateNow = tools.formatDate(new Date());

        if (!noteForm) {
            createButton.hidden = true;

            noteForm = NoteForm(
                noteTableBody,
                {
                    dateForInput: dateNow
                }
            );
        }
    },

    [noteActions.DELETE](event) {
        console.log('delete');

        const noteIndex = event.target.parentElement.id;

        notesCollection.deleteData(noteIndex);

        _renderListAndSummary();
    },

    [noteActions.EDIT](event) {
        console.log('edit');

        const rowForEdit = event.target.parentElement.parentElement;
        noteIndex = event.target.parentElement.id;

        const {
            name,
            created,
            category,
            content
        } = notes[noteIndex];

        if (!noteForm) {
            noteForm = NoteForm(
                rowForEdit,
                {
                    name,
                    created: tools.formatDate(created),
                    category,
                    content
                }
            );
        }
    },

    [noteActions.SAVE](event) {
        console.log('save');

        const controlElements = document.getElementsByClassName('control-element');

        const name = controlElements[0].value;
        const created = new Date(controlElements[1].value);
        const category = controlElements[2].value;
        const content = controlElements[3].value;

        const newNote = new Note(
            name,
            created,
            category,
            content
        );

        if (!noteIndex) {
            notesCollection.insertData(newNote);
        }

        if (noteIndex !== undefined) {
            const a = notesCollection.editData(
                noteIndex,
                {
                    name: newNote.name,
                    created: newNote.created,
                    category: newNote.category,
                    content: newNote.content
                }
            );

            noteIndex = undefined;
        }

        noteForm = noteForm.remove();

        createButton.hidden = false;

        _renderListAndSummary();
    }
};

document.addEventListener('click', (event) => {
    let action = event.target.dataset.action;

    if (action) {
        app[action](event);
    }
});

function _renderListAndSummary() {
    const activeNotes = notes
        .filter(note => note.archive === 0);

    noteList.remove();

    noteList = NoteList(
        noteTableBody,
        '',
        'note-table-row',
        'note-table-column',
        activeNotes
    );

    const summaryNotes = notesCollection.doSummary();

    summaryList.remove();

    summaryList = SummaryList(
        summaryTableBody,
        'summary-list',
        'summary-table-row',
        'summary-table-column',
        summaryNotes
    );
}

function _renderArchiveList(parentElement, previousElement, classes, categoryName) {
    const notesByCategory = notes.filter(note => {
        return note.category === categoryName &&
            note.archive === 1;
    });

    const archiveNoteList = ArchiveNoteList(
        parentElement,
        classes,
        'summary-table-row',
        'summary-table-column',
        notesByCategory
    );

    parentElement.insertBefore(archiveNoteList, previousElement.nextSibling);
}