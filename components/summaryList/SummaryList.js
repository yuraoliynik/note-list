import ArchiveNoteList from '../archiveNoteList/ArchiveNoteList.js';
import notesCollection from '../../data/notesCollection.js';
import Row from '../row/Row.js';

export default function SummaryList(
    parentElement,
    SummaryDataArray = []
) {
    const summaryList = parentElement.appendChild(document.createElement('div'));
    summaryList.className = 'summary-table__list';

    SummaryDataArray.forEach((summaryItem, index) => {
        const summaryRow = Row(
            summaryList,
            'summary-table__row table__row cursor_pointer',
            'summary-table__cell',
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
    const archiveNoteTable = document.querySelector(`.archive-table-${index}`);

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
        previousElement.style.marginBottom = '4px';

        const archiveNoteList = ArchiveNoteList(
            parentElement,
            `${categoryName} archive-table-${index} archive-table`,
            notesByCategory
        );

        parentElement.insertBefore(archiveNoteList, previousElement.nextSibling);
    }
}
