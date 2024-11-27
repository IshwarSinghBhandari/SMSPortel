import mongoose from "mongoose";

const Schema = mongoose.Schema;
const librarySchema = new Schema({
    library:{type:String ,required:true},
  });

 const libraryModel = mongoose.model('libraries', librarySchema);

 export default libraryModel;

 

 


 




