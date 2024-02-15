const { mongoose } = require('mongoose');

const user = new mongoose.Schema({

    firstName: { type: String },
    lastName: { type: String },
    maidenName: { type: String },
    age: { type: String },
    gender: { type: String },
    email: { type: String },
    phone: { type: String },
    username: { type: String },
    password: { type: String },
    birthDate: { type: String },
    image: { type: String },
    bloodGroup: { type: String },
    height: { type: String },
    weight: { type: String },
    eyeColor: { type: String },
    hair: {
        type: Array,
        color: { type: String },
        type: { type: String },
    },
    domain: { type: String },
    ip: { type: String },
    address: {
        type: Array,
        address: { type: String },
        city: { type: String },
        coordinates: {
            type: Array,
            lat: { type: String },
            lng: { type: String },
        },
        postalCode: { type: String },
        state: { type: String },
    },
    macAddress: { type: String },
    university: { type: String },
    bank: {
        type: Array,
        cardExpire: { type: String },
        cardNumber: { type: String },
        cardType: { type: String },
        currency: { type: String },
        isbn: { type: String },

    },
    company: {
        type: Array,
        address: { type: Array,
            address: { type: String },
            city: { type: String },
            coordinates: {
                type: Array,
                lat: { type: String },
                lng: { type: String },
            },
            postalCode: { type: String },
            state: { type: String },
        },
        department: { type: String },
        name: { type: String },
        title: { type: String },

    },
    ein: { type: String },
    ssn: { type: String },
    userAgent: { type: String },

})

var add_user = mongoose.model('user', user)
module.exports = { add_user };