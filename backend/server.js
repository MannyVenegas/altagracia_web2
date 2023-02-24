const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail");

const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Route
app.get("/", (req, res) => {
    res.send("Home page")
})

app.post("/api/sendemail", async (req, res) => {
    const { email, phone, description, firstName, lastName, subject } = req.body;

    try {
        await sendEmail(firstName, lastName, phone, email, subject, description)
        res.status(200).json({succes: true, message: "Email sent"})
    } catch (error) {
        res.status(500).json(error.message)
        
    }
})

const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
  })
