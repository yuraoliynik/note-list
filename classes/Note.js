import findDates from '../tools/findDates.js';

export default class Note {

    constructor(name, created = '', category, content, archive = 0) {
        this.name = name;

        if (!created) {
            created = new Date();
        }

        this.created = new Intl
            .DateTimeFormat(
                'en-US',
                {
                    month: 'short',
                    year: 'numeric',
                    day: 'numeric'
                }
            )
            .format(
                new Date(created)
            );

        this.category = category;
        this.content = content;

        Object.defineProperty(
            this,
            'dates',
            {
                enumerable: true,
                configurable: true,
                get() {
                    if (this.content) {
                        return findDates(this.content);
                    }

                    return '';
                }
            }
        );

        this.archive = archive;

        Object.defineProperty(
            this,
            'archive',
            {enumerable: false}
        );
    }
};
