const opts = {
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
    .command('listar', 'Comando para listar', opts)
    .command('crear', 'Comando para crear archivo con la tabla de multiplicar', opts)
    .help()
    .argv

module.exports = {
    argv
}