import mongoose from "mongoose";
const { Schema } = mongoose;

const accomodationSchema = new Schema({
    accomodationType:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    availabilityPeriod:{
        type:String,
        required:true
    },
    uniDistance:{
        type:String,
        required:true
    },
    features:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    rent:{
        type:Number,
        required:true
    }
},{
    timestamps:true
  })


export default mongoose.model("Accomodation", accomodationSchema)