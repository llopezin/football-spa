export function createTable(...heads) {
    const table = document.createElement('table');
    const headers = document.createElement('tr');

    heads.forEach(header => {
        const head = document.createElement('th');
        head.textContent = `${header}`;
        headers.appendChild(head)
    })

    table.appendChild(headers)


    return table
}