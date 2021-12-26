const dateRegEx = /(\d+\/\d+\/\d+)/g;

export default function findDates(string) {
    if (!string) {
        return '';
    }

    const date = string.match(dateRegEx);

    if (date) {
        return date.join(', ');
    }

    return '';
};
