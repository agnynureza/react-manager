const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const passwordSchema = new Schema({
    url    : String,
    username : String,
    password : String,
    userid : {
        type: Schema.Types.ObjectId, ref:'User'
    },
})

const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;