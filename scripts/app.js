import Note from '../classes/Note.js';
import noteActions from '../constants/noteAction.enum.js';
import notesCollection from '../data/notesCollection.js';
import NoteForm from '../components/noteForm/NoteForm.js';
import NoteList from '../components/noteList/NoteList.js';
import SummaryList from '../components/summaryList/SummaryList.js';
import formatDate from '../tools/formatDate.js';

const noteTableBody = document.querySelector('.note-table__body');

const notes = notesCollection.getData();
const activeNotes = notes.filter(note => note.archive === 0);

let noteList = NoteList(noteTableBody, activeNotes);

const summaryTableBody = document.querySelector('.summary-table__body');
const summaryNotes = notesCollection.doSummary();

let summaryList = SummaryList(summaryTableBody, summaryNotes);

const createButton = document.querySelector('.create-button');
createButton.dataset.action = noteActions.CREATE;

let noteForm;
let noteIndex;

const app = {
    [noteActions.ACTIVE](event) {
        if (noteForm) {
            return;
        }

        const activeNoteIndex = event.target.parentElement.id;

        notesCollection.editData(
            activeNoteIndex,
            {archive: 0}
        );

        _renderListAndSummary();
    },

    [noteActions.ARCHIVE](event) {
        if (noteForm) {
            return;
        }

        const archiveNoteIndex = event.target.parentElement.id;

        notesCollection.editData(
            archiveNoteIndex,
            {archive: 1}
        );

        _renderListAndSummary();
    },

    [noteActions.CANCEL]() {
        noteForm = noteForm.remove();

        createButton.hidden = false;

        _renderListAndSummary();
    },

    [noteActions.CREATE]() {
        const dateNow = formatDate(new Date());

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
        if (noteForm) {
            return;
        }
        const noteIndex = event.target.parentElement.id;

        notesCollection.deleteData(noteIndex);

        _renderListAndSummary();
    },

    [noteActions.EDIT](event) {
        if (noteForm) {
            return;
        }

        const parent = event.target.closest('.note-table__list');
        const rowForEdit = event.target.closest('.note-table__row');

        noteIndex = event.target.parentElement.id;

        const {
            name,
            created,
            category,
            content
        } = notes[noteIndex];

        rowForEdit.style.margin = 'unset';

        noteForm = NoteForm(
            rowForEdit,
            {
                name,
                created: formatDate(created),
                category,
                content
            }
        );

        noteForm.style.marginBottom = '7px';
        parent.insertBefore(noteForm, rowForEdit.nextSibling);
    },

    [noteActions.SAVE]() {
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
            notesCollection.editData(
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
    let action = event.target.dataset.action ||
        event.target.parentElement.dataset.action;

    if (action) {
        app[action](event);
    }
});

function _renderListAndSummary() {
    const activeNotes = notes
        .filter(note => note.archive === 0);

    noteList.remove();

    noteList = NoteList(noteTableBody, activeNotes);

    const summaryNotes = notesCollection.doSummary();

    summaryList.remove();

    summaryList = SummaryList(summaryTableBody, summaryNotes);
}
