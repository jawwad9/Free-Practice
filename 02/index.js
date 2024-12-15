import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.get("/service", (req, res) => {
    res.send("Hello service!");
})

app.get("/contact", (req, res) => {
    res.send("Hello Contact!");
})

app.get("/about", (req, res) => {
    res.send("Hello about!");
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})