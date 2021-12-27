export default class DataStorage {
    #storage;
    #countData;
    #newDataKey = 0;

    constructor(array = []) {
        this.#storage = [...array];

        this.#countData = array.reduce(
            (count, item) => ++count,
            0
        );

        ++this.#newDataKey;
    }

    getData() {
        return this.#storage;
    };

    get count() {
        return this.#countData;
    };

    getEditDataKey() {
        return this.#newDataKey;
    }

    insertData(data) {
        this.#storage.push(data);

        ++this.#countData;

        return ++this.#newDataKey;
    }

    editData(index, propertyObject) {
        Object.assign(
            this.#storage[index],
            propertyObject
        );

        return ++this.#newDataKey;
    }

    deleteData(index) {
        delete this.#storage[index];

        --this.#countData;

        return ++this.#newDataKey;
    }
};
