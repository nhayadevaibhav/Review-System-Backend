import mongoose from "mongoose";
const dbConnect=async()=>{

    try {

        await mongoose.connect(process.env.MONOGODB_URL);
        console.log("MongoDB connected successfully !!! yahuuu  !");
    } catch (error) {
        console.log("no not connected",error);
    }
}
export default dbConnect;