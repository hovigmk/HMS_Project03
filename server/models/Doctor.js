const { Schema, model } = require('mongoose');
const bycrypt = require('bcrypt');

//import schema of patients from patients.js
const patientsSchema = require('./Patient');

const doctorSchema = new Schema({
    firstNameDoc: {
        type: String,
        required: true,
    },
    lastNameDoc: {
        type: String,
        required: true,
    },
    emailDoc: { // email can be interchanged if we want to use a more "hospital" like system
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
    },
    //set savedPatients to be an array of data that adheres to the patientsSchema
    patients: [patientsSchema],
},
{
    toJSON: {
        virtuals: true,
    },
}
);

// hash password before saving to database
doctorSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bycrypt.hash(this.password, saltRounds);
    }
    next();
});

// compare password to hashed password
doctorSchema.methods.isCorrectPassword = async function (password) {
    return bycrypt.compare(password, this.password);
};

// create the Doctor model using the doctorSchema
// doctorSchema.virtual('patientCount').get(function() {
//     return this.patients.length;
// });

const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor;