const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) =>{
    console.log('===================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('===================='.green);
    let numero = 1
    while (numero <= limite){
        console.log(`${base} x ${numero} = ${numero * base}`)
        numero++
    }
}

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        if( !Number(base) ){
            reject('No es un número');
            return;
        }

        let text = '';

        let numero = 1
        while (numero <= limite){
            text += `${base} x ${numero} = ${numero * base}\n`;
            numero++
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, text, (err) => {
            if(err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}