import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userroutes.js"
import messageRouter from "./routes/messageroutes.js";
import { Server } from "socket.io";

//create Express app and HTTP server
const app = express();
const server = http.createServer(app);

//Initialize socket.io server
export const io = new Server(server,{
    cors: {origin : "*"}
})

//Store online users
export const userSocketMap = {};
//socket.io connection handler
io.on("connection",(socket)=>{
    const userId = socket.handshake.query.userId;
    console.log("User Connected", userId);

    if(userId) userSocketMap[userId] = socket.id;
    //Emit online users to all connected client
    io.emit("getOnlineUsers",Object.keys())
})

//Middleware setup
app.use(express.json({limit: "4mb"}));
app.use(cors());

//Routes setup
app.use("/api/status", (req,res)=>res.send("Server is live"));
app.use("/api/auth",userRouter);
app.use("/api/messages",messageRouter);


//connect to MongoDB
await connectDB();

const PORT = process.env.PORT || 5001;
server.listen(PORT,()=> console.log("Server is running on PORT : "+ PORT));