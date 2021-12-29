export default function clickCreateButton() {
    const createButton = document.querySelector('.create-button-wrap');
    createButton.hidden = false;

    const createForm = document.querySelector('.note-form');
    createForm.style.display = 'flex';

    const dateInput = document.querySelector('.date-input');

    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    const day = dateNow.getDate();

    dateInput.value = `${year}-${month}-${day}`;
};
