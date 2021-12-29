import noteCategoryNames from '../constants/noteCategoryName.enum.js';
import DataStorage from '../classes/DataStorage.js';
import startDataNotes from './startDataNotes.js';

const notesCollection = new DataStorage(startDataNotes);

notesCollection.doSummary = function () {
    const noteCategoryNamesArr = Object.values(noteCategoryNames);

    const notesArray = notesCollection.getData();

    const summaryNotes = [];

    noteCategoryNamesArr.forEach(categoryName => {
        let active = notesArray
            .filter(noteItem => {
                return noteItem.category === categoryName
                    && noteItem.archive === 0;
            })
            .length;

        let archive = notesArray
            .filter(noteItem => {
                return noteItem.category === categoryName
                    && noteItem.archive === 1;
            })
            .length;

        const summaryObject = {
            categoryName,
            active,
            archive
        }

        summaryNotes.push(summaryObject);
    });

    return summaryNotes;
};

export default notesCollection;
