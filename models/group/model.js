import mongoose from "mongoose";

const Schema = mongoose.Schema;
const groupSchema = new Schema({
    group:{type:String ,required:true},
  });

 const groupModel = mongoose.model('groups', groupSchema);

 export default groupModel;

 


 




