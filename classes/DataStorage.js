export default class DataStorage {
    #storage;
    #countData;

    constructor(array) {
        this.#storage = [...array];

        this.#storage.forEach((item, index) => item.id = index);

        this.#countData = array.reduce(
            (count, item) => ++count,
            0
        );
    }

    getData() {
        return this.#storage;
    };

    insertData(dataObject) {
        dataObject.id = this.#storage.length;

        this.#storage.push(dataObject);

        return ++this.#countData;
    }

    editData(index, propertyObject) {
        Object.assign(
            this.#storage[index],
            propertyObject
        );

        return this.#storage[index];
    }

    deleteData(index) {
        delete this.#storage[index];

        return --this.#countData;
    }
};
