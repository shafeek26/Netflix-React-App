const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email : {
            type : String,
            unique : true,
            required : [true, 'Please enter email adress'],
        },
        password : {
            type : String,
        },
        token : {
            type : String,
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('User', userSchema);