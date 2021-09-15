export function dateFormatter(date) {
    const d = date.toJSON().slice(0, 10);
    return (d.slice(8, 10) + '/' + d.slice(5, 7) + '/' + d.slice(0, 4));
}

export function dateTimeFormatter(date) {
    const fd = dateFormatter(date);
    const t = date.toJSON().slice(11, date.toJSON().length - 5);
    return (`${t} ${fd}`);
}