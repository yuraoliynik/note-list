import Row from './Row.js';
import ArchiveNoteList from './ArchiveNoteList.js';
import {notesCollection} from '../data';
import {noteCategoryNames} from '../constants';

export default function SummaryList(
    parentElement,
    classNameTable = '',
    classNameRow = '',
    classNameCell = '',
    SummaryDataArray = []
) {
    const summaryList = parentElement.appendChild(document.createElement('div'));

    if (classNameTable) {
        summaryList.className = classNameTable;
    }

    SummaryDataArray.forEach((summaryItem, index) => {
        const summaryRow = Row(
            summaryList,
            classNameRow,
            classNameCell,
            summaryItem
        );

        summaryRow.onclick = () => handleClickSummaryRow(
            summaryList,
            summaryRow,
            summaryItem.categoryName,
            index
        );
    });

    return summaryList;
};

function handleClickSummaryRow(parentElement, previousElement, categoryName, index) {
    const archiveNoteTable = document.querySelector(`.archive-note-table-${index}`);

    if (archiveNoteTable && archiveNoteTable.hidden) {
        return archiveNoteTable.hidden = false;
    }

    if (archiveNoteTable && !archiveNoteTable.hidden) {
        return archiveNoteTable.hidden = true;
    }

    const notesArray = notesCollection.getData();

    const notesByCategory = notesArray.filter(note => {
        return note.category === categoryName &&
            note.archive === 1;
    });

    if (notesByCategory.length) {
        const archiveNoteList = ArchiveNoteList(
            parentElement,
            `${categoryName} archive-note-table-${index} summary-table`,
            'summary-table-row',
            'summary-table-column',
            notesByCategory
        );

        parentElement.insertBefore(archiveNoteList, previousElement.nextSibling);
    }
}