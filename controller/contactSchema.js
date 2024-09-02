const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    Name : { type : String},
    Email : {type : String},
  ContactNumber : {type : Number}
})

const Contact = mongoose.model("Contact",contactSchema)

module.exports = Contact