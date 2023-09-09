import mongoose from "mongoose";

async function connect(){
await mongoose.connect(
    "mongodb+srv://shrivastavaharsh876:12012002@cluster0.heu49aj.mongodb.net/?retryWrites=true&w=majority"
    );

console.log("MongoDB connection is successful");
}

export default connect;