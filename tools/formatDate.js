export default function formatDate(date) {
    const dateNow = new Date(date);

    let year = dateNow.getFullYear()
        .toString();

    let month = (dateNow.getMonth() + 1)
        .toString();

    let day = dateNow.getDate()
        .toString();

    if (month.length === 1) {
        month = `0${month}`;
    }

    if (day.length === 1) {
        day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
}