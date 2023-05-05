import accomodationModel from "../models/accomodation.model.js";

export const createAccomodation = async(req,res)=>{
    const newAccomodation = new accomodationModel({
        accomodationType:req.body.accomodationType,
        location:req.body.location,
        availabilityPeriod:req.body.availabilityPeriod,
        uniDistance:req.body.uniDistance,
        features:req.body.features,
        contactNumber:req.body.contactNumber,
        rent:req.body.rent
    })

    try {
        //check if user has bought something from the seller.
        const savedAccomodation = await newAccomodation.save()
        res.status(201).send(savedAccomodation);
      } catch (err) {
        res.status(404).send("something went wrong");
      }
}

export const deleteAccomodation =  async(req,res)=>{
    try{
        await accomodationModel.findByIdAndDelete(req.params.id)
        res.status(200).send("deleted accomodation")
    }
    catch(err){
        res.status(404).send("something went wrong");
    }
}

export const getAllAccomodation =  async(req,res)=>{
    try{
        const response =  await accomodationModel.find()
        res.status(200).send(response)
    }catch(err){
        res.status(404).send("something went wrong");
    }
}