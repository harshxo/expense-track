import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import TransactionRouters from "./routes/transactions.js";


const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/", TransactionRouters);

await mongoose.connect("mongodb+srv://shrivastavaharsh876:12012002@cluster0.heu49aj.mongodb.net/?retryWrites=true&w=majority")
 console.log("MongoDB connection is successful");


app.listen(PORT , () => {
    console.log("Server is running at http://localhost:4000");
});


