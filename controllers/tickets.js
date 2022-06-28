const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

module.exports={
    new:newTicket,
    create,
    addToFlight
}

function create(req,res){
Ticket.create(req.body,function(err,ticket){
    res.redirect('/tickets/new')
})
}


function newTicket(req,res){
Ticket.find({},function(err,tickets){
    res.render('tickets/new',{
        tickets
    })
})
}

function addToFlight(req,res){
Flight.findById(req.params.id,function(err,flight){
    Ticket.find({flight:flight._id},function(err,tickets){
        tickets.flight.push(req.body.ticketId)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
})

}
 