import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
  
    projectCardImg: {
      type: String,
      required: false,
    },
    pp: {
      type: String,
      required: false,
    },
    cat: {
      type: String,
      required: false,
    },
    userName: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    cardDesc: {
        type: String,
        required: false,
      },
    cardTitle: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    images: {
      type: String,
      required: false,
    },
    deliveryTime: {
      type: Number,
      required: false,
    },
    revisionNumber: {
      type: Number,
      required: false,
    },
    features: {
      type: [String],
      required: false,
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);