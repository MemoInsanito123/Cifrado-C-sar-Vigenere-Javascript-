// Función para generar cada fila del cifrado Vigenère
const alphabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const tableBody = document.querySelector('tbody');

function generateVigenereRow(shift) {

    const row = document.createElement('tr');
    const rowHeader = document.createElement('th');
    rowHeader.textContent = alphabeto[shift]; // Encabezado de la fila (letra inicial)
    row.appendChild(rowHeader);

    for (let i = 0; i < alphabeto.length; i++) {
        const cell = document.createElement('td');
        const shiftedIndex = (i + shift) % alphabeto.length; // Desplazar el alfabeto
        cell.textContent = alphabeto[shiftedIndex];
        row.appendChild(cell);
    }

    return row;
}

// Generar todas las filas y añadirlas a la tabla
for (let i = 0; i < alphabeto.length; i++) {
    const newRow = generateVigenereRow(i);
    tableBody.appendChild(newRow);
}

// Añadir un evento de clic a cada celda
tableBody.addEventListener('click', function(event) {
    if (event.target.tagName === 'TD') {
        // Remover clase 'selected' de todas las celdas
        const allCells = tableBody.querySelectorAll('td');
        allCells.forEach(cell => cell.classList.remove('selected'));

        // Añadir clase 'selected' a la celda clickeada
        event.target.classList.add('selected');
    }
});
