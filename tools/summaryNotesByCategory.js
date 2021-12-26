import {noteCategoryNames} from '../constants';

export default function summaryNotesByCategory(groupNotesByCategory) {
    const noteCategoryNamesArr = Object.values(noteCategoryNames);

    const summarizedNotes = [];

    if (!groupNotesByCategory) {
        noteCategoryNamesArr.forEach((categoryName, index)  => {
            summarizedNotes[index] = {
                categoryName,
                active: 0,
                archive: 0,
                notes: [],
            };
        });

        return summarizedNotes;
    }

    noteCategoryNamesArr.forEach((categoryName, index)  => {
        const active = groupNotesByCategory[categoryName]
            .filter(note => note.archive === 0)
            .length;

        const archive = groupNotesByCategory[categoryName]
            .filter(note => note.archive === 1)
            .length;

        summarizedNotes[index] = {
            categoryName,
            active,
            archive,
            notes: groupNotesByCategory[categoryName],
        };
    });

    return summarizedNotes;
};
