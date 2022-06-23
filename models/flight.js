const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
   airport:{
       type:String,
       emus: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
   },
   arrival:Date
},
    {
        timestamps: true
    }
)


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            return new Date().getFullYear();
        }
    },
    destinations: [destinationSchema]

}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)