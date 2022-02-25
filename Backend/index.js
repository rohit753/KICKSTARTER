const express = require("express")

const mongoose = require("mongoose")
const dotenv = require("dotenv");
const userRoute =require("./routes/Users")
const authRoute = require("./routes/auth")
const productRoute= require("./routes/Product")
const cartRoute= require("./routes/Cart")
const orderRoute = require("./routes/Order")
const cors = require("cors");
const multer = require("multer");






const app = express();
app.use(cors());



dotenv.config();

// Mongo Connect


mongoose.connect(process.env.Mongo_url).then(() => console.log("Database connected successfully")).catch((err) => { console.log(err) })

//Image uploads routed

const storage = multer.diskStorage({
    destination: (req, file, cb) =>
    { 
        cb(null,"./Public/Images")
    }, filename: (req, file, cb) =>
    { 
        // const name = new Date()
        // name+=".jpg"
        cb(null,req.body.name);
    }
})

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) =>
{ 
    console.log("uploaded")
    res.status(200).json("File Uploaded")
})

//routes


app.use(express.json());


app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.use("/api/cart", cartRoute);
// app.use("/api/order", orderRoute);

// 
// server start om port
app.listen(process.env.PORT||3500,()=> {
    console.log("server is up and running")
})
