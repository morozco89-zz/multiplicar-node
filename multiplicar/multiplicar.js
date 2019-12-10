const fs = require('fs');
const colors = require('colors');

let base = 2;
let tabla = '';

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base))
            return reject(`El valor introducido '${base}',  no es un número`)

        for (let i = 1; i <= limite; i++)
            tabla += `${base} * ${i} = ${base * i}\n`

        fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

            console.log("El archivo ha sido guardado exitosamente!")
        })
    })
}

let listarTabla = (base, limite = 10) => {
    if (!Number(base))
        throw new Error(`El valor introducido '${base}', no es un número`)

    console.log(`Tabla de ${base}`.green);

    for (let i = 1; i <= limite; i++)
        console.log(`${base} * ${i} = ${base * i}`)
}

module.exports = {
    crearArchivo,
    listarTabla
}