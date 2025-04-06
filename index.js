const csv = require('csv-parser');
const fs = require('fs');

const filepath = 'src/data.csv';

let total_debito = 0;
let total_credito = 0;

let cont_debito = 0;
let cont_credito = 0;

let monto_mayor = 0;
let id_mayor= 0;

fs.createReadStream(filepath)
    .pipe(csv())
    .on('data', (data) => {
        if (data.tipo === 'Débito') {
            total_debito += parseFloat(data.monto);
            cont_debito++;
        }
        if (data.tipo === 'Crédito') {
            total_credito += parseFloat(data.monto);
            cont_credito++;
        }

        if (data.monto > monto_mayor) {
            monto_mayor = parseFloat(data.monto);
            id_mayor = data.id;

        }
    })

    .on('end', () => {
        console.log(`\nReporte de Transacciones:\n------------------------------------------------------`);
        console.log(`Balance Final: ${total_credito - total_debito}`);
        console.log(`Transacción de mayor monto: ID: ${id_mayor} - ${monto_mayor}`);
        console.log(`Conteo de transacciones: Crédito: ${cont_credito} Débito: ${cont_debito}`);
        
    })

    .on('error', (exception) => {
        console.log('Error al leer el archivo CSV:', exception);
    })

