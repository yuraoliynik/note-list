export default class App {
    constructor(document) {
        this._elem = document;
        elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
        alert('сохраняю');
    }

    load() {
        alert('загружаю');
    }

    search() {
        alert('ищу');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    }
};
