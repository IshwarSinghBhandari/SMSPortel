import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    grp:{type:String, required:true},
    name:{type:String, required:true},
    number:{type:Number, required:true},
    email:{type:String, required:true},
})

const contactModel = mongoose.model('contacts',contactSchema)

export default contactModel;