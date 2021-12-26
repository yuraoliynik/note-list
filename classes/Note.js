import tools from '../tools';

export default class Note {

    constructor(name, created, category, content, archive = 0) {
        this.name = name;
        this.created = created;
        this.category = category;
        this.content = content;
        this.archive = archive;

        Object.defineProperty(
            this,
            'dates',
            {
                enumerable: true,
                configurable: true,
                get() {
                    if (this.content) {
                        return tools.findDates(this.content);
                    }

                    return '';
                }
            }
        );
    }
};
