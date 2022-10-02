const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
	console.log('========LISTAR======='.green);
	for( let i = 1; i <= limite; i++ ){
		let rpta = base * i;
		console.log(`${base} * ${i} = ${rpta}`);
	}
	console.log('====================='.green);
}

let crearArchivo = (base, limite) => {
	return new Promise((resolve, reject) => {

		if(!Number(base)){
			reject(`el valor introducido ${base}, no es un número`);
			return;
		}

		if(!Number(limite)){
			reject(`el valor introducido ${limite}, no es un número`);
			return;
		}

		let data = '';

		for( let i = 1; i <= limite; i++ ){
			let rpta = base * i;
			data += `${base} * ${i} = ${rpta}\n`;
		}

		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
			if (err) 
				reject(err);
			else
				resolve(`tabla-${base}-al-${limite}.txt`);
		});

	})
}

module.exports = {
	crearArchivo,
	listarTabla
}

