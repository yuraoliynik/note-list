import noteActions from '../../constants/noteAction.enum.js';
import noteCategoryNames from '../../constants/noteCategoryName.enum.js';

const categoryNames = Object.values(noteCategoryNames);

export default function NoteForm(
    parentElement,
    ...inputData
) {
    const {
        name,
        created,
        category,
        content,
        dateForInput
    } = inputData[0];

    const formNote = parentElement.appendChild(document.createElement('div'));
    formNote.className = 'note-form';

    const inputsBlock = formNote.appendChild(document.createElement('div'));
    inputsBlock.className = 'note-form__input-block';

    const inputName = inputsBlock.appendChild(document.createElement('input'));
    inputName.type = 'text';
    inputName.value = name || '';
    inputName.className = 'note-form__input control-element';

    const inputCreated = inputsBlock.appendChild(document.createElement('input'));
    inputCreated.type = 'date';
    inputCreated.value = dateForInput || created;
    inputCreated.className = 'note-form__input control-element';

    const selectCategory = inputsBlock.appendChild(document.createElement('select'));
    selectCategory.className = 'note-form__select control-element';

    categoryNames.forEach(categoryName => {
        const optionCategory = selectCategory.appendChild(document.createElement('option'));
        optionCategory.innerText = categoryName;

        if (category && categoryName === category) {
            optionCategory.selected = 'selected';
        }
    });

    const inputContent = inputsBlock.appendChild(document.createElement('input'));
    inputContent.type = 'text';
    inputContent.value = content || '';
    inputContent.className = 'note-form__input control-element';

    const buttonBlock = formNote.appendChild(document.createElement('div'));
    buttonBlock.className = 'note-form__button-block';

    const buttonCancel = buttonBlock.appendChild(document.createElement('button'));
    buttonCancel.innerText = 'Cancel';
    buttonCancel.dataset.action = noteActions.CANCEL;
    buttonCancel.className = 'note-form__button cancel-button';

    const buttonSaveNote = buttonBlock.appendChild(document.createElement('button'));
    buttonSaveNote.innerText = 'Save Note';
    buttonSaveNote.dataset.action = noteActions.SAVE;
    buttonSaveNote.className = 'note-form__button save-button';

    return formNote;
};
