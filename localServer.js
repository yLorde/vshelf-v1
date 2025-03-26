const express = require('express');
const readVShelfFile = require('./functions/readVShelfFile');
const rewriteVShelfFile = require('./functions/writeVShelfFile');
const writeVShelfFile = require('./functions/writeVShelfFile');
const server = express();

module.exports = async function localServer() {


    server.get('/', (req, res) => {
        res.send('V-Shel Virtual Server');
    });

    server.post('/add-filme', (req, res) => {
        try {
            const { headers } = req;
            const { nome, stream, classificacao, genero, status, tipo } = headers;

            console.log(nome, stream, classificacao, genero, status, tipo);

            const oldBody = readVShelfFile('./films/default_list.vshelf');
            const body = `{ nome: '${nome}', stream: '${stream}', classificacao: ${classificacao}, genero: '${genero}', status: '${status}', tipo: '${tipo}' },`

            writeVShelfFile('./films/default_list.vshelf', `${oldBody}\n${body}`);

            return res.status(200).json({
                message: 'OK',
                filme: {
                    nome: nome,
                    stream: stream,
                    classificacao: classificacao,
                    genero: genero,
                    status: status,
                    tipo: tipo,
                }
            })
        } catch (err) {
            console.log(err);
        };
    });

    server.get('/get-all-films', (req, res) => {
        try {
            const allFilms = readVShelfFile('./films/default_list.vshelf');

            return res.status(200).json({ allFilms })
        } catch (err) {
            console.log(err);
        };
    });

    server.listen(1609, () => { })
};