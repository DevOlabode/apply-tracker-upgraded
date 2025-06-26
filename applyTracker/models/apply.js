const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    company : {
        type : String,
        required : true,
    },
    position : {
        type : String,
        required : true,
    },
    status : {
        type : 'String',
        enum : ['applied', 'rejected', 'interviewing', 'offer', 'hired'],
        lowercase : true,
        default : 'applied',
        required : true,
    },
    appliedDate : {
        type : String,
        required : false,
    },
    interviewDate : {
        type : String,
        required : false,
    }, 
    notes : {
        type : String,
        required : false,
    }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application 