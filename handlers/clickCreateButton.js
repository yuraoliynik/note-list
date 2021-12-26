export default function clickCreateButton() {
    const createButton = document.querySelector('.create-button-wrap');
    createButton.style.display = 'none';

    const createForm = document.querySelector('.create-form');
    createForm.style.display = 'flex';

    const dateInput = document.querySelector('.date-input');

    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const day = dateNow.getDate();

    dateInput.value = `${year}-${month}-${day}`;
};
