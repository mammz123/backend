
const Contact = require("./contactSchema");



const CreateContact = async(req,res)=> {
    const {Name,Email,ContactNumber}= req.body;
    const Contactdetails = await Contact.create({
        Name,Email,ContactNumber
    })
    res.json(Contactdetails)
}
module.exports = CreateContact