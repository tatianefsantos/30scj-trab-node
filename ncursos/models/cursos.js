module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var curso = Schema({
        codigo: { type: Number, required: true, index: { unique: true } },
        descricao: { type: String, required: true },
        ch: { type: Number, required: true },
        categoria: { type: String }
    });
    return mongoose.model('cursos', curso);
};