import mongoose from "mongoose";

//function to connect to the mongodb database
export const connectDB = async () => {
    try {
        mongoose.connection.on('connected',()=>console.log('Database Connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)

        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
    }catch(error){
        // console.log("MongoDB Connection Failed:",error.message);
        // process.exit(1);
        console.log(error);
    }
}
