import mongoose from "mongoose";

async function dbConnect(){
    await mongoose.connect(`${process.env.MongoDB}`)
}
export default dbConnect;