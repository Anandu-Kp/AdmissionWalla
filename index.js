const express=require("express")
require("dotenv").config();
const cors=require("cors")

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: 'https://admissionwalla.in',
    })
);


// requiring routes
const userRoute= require("./routes/userRoute")

// using routes
app.use("",userRoute);


app.listen(3000,()=>{
    console.log("server is runninng on ",3000);
})