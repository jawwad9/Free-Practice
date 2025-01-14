import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.get("/home", (req, res) => {
    res.send("Hello World!");
})

app.get("/about", (req, res) => {
    res.send("Hello about!");
})

app.get("/contact", (req, res) => {
    res.send("Hello contact!");
})

app.get("/contact", (req, res) => {
    res.send("Hello contact!");
})

app.get("/contact", (req, res) => {
    res.send("Hello contact!");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})