const express = require("express")
const {submitForm}=require("../controllers/userController")

const app= express();

app.post("/submit-form",submitForm);


module.exports = app;