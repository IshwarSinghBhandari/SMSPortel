import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    
    libs: { type: String, required:true},
    message:{type:String, required:true}
})

const messageModel = mongoose.model('messages',messageSchema)

export default messageModel;




