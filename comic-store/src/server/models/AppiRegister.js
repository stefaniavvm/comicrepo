const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appiRegisterSchema = new Schema ({
    name: {type: String, required:true},
    lastName: {type: String},
    age: {type: Number, required: true},
    Comics:[{type: mongoose.Types.ObjectId, ref:'Comic'}],

},{
    timestamps:true
});

const RegisterUsers = mongoose.model('Cliente', appiRegisterSchema);

module.exports = RegisterUsers;