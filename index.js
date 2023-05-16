import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import GigRoute from "./routes/gig.route.js"
import ReviewRoute from './routes/review.route.js'
import UserRouter from "./routes/user.route.js"
import Auth from "./auth/auth.js"
import session from "express-session"
import Payment from "./routes/payment.route.js"
import AccomodationRoute from "./routes/accomodation.route.js"
import MongoStore from "connect-mongo";


//http://localhost:5173/
const app = express()
dotenv.config()

const mongoStore = MongoStore.create({
    mongoUrl: process.env.MONGO,
    ttl: 60 * 60 * 24, // session TTL (optional)
  });

app.use(
    session({
        secret: "myappsecret",
        resave: false,
        saveUninitialized: false,
        store: mongoStore,
    })
   );
//    app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//    });

// app.use(
// cors({
//     credentials: true,
//     origin:["http://127.0.0.1:5173/","https://checkout.stripe.com"]
// })
// );
app.use(cors({
    origin:true,
    credentials: true
  }));
   
app.use(express.json());

const mongoConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
    } catch(error){
        console.log(error)
    }
}

app.use("/api/gigs",GigRoute)
app.use("/api/reviews",ReviewRoute)
app.use("/api/users",UserRouter)
app.use("/api/auth",Auth)
app.use("/api/payment",Payment)
app.use("/api/accomodation",AccomodationRoute)

app.get("/hello",(req,res)=>{
    res.send("life is good")
})

app.get("/",(req,res)=>{
    res.send("welcome to husky hive")
})



app.listen(process.env.PORT || 4000,()=>{
    mongoConnection()
    console.log("MongoDB connected")
    console.log("Backend is running")
})