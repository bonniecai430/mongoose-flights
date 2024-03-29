const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    arrival:Date,
    airport:{
       type:String,
       emus: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
   }
   
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
            return new Date().setFullYear(new Date().getFullYear()+1);
        }
    },
    destinations: [destinationSchema]

}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema)