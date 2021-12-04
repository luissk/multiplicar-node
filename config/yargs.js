const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla multiplicar', opciones)
    .command('crear', 'crea una tabla de multiplicación', opciones)
    .help()
    .argv;

module.exports = {
    argv
}