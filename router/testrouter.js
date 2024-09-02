const express=require("express")
const CreateContact = require("../controller/CreateContact")




const router = express.Router()


router.route('/create').post(CreateContact)



module.exports=router
