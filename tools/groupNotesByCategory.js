import {noteCategoryNames} from '../constants';

export default function groupNotesByCategory(notesArr) {
    const noteCategoryNamesArr = Object.values(noteCategoryNames);

    const groupedNotes = {};

    if (!notesArr) {
        noteCategoryNamesArr.forEach(categoryName => {
            groupedNotes[categoryName] = [];
        });

        return groupedNotes;
    }

    noteCategoryNamesArr.forEach(categoryName => {
             groupedNotes[categoryName] = notesArr
                 .filter(note => note.category === categoryName);
     });

    return groupedNotes;
};
