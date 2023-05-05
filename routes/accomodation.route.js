import express from "express"
import { createAccomodation,deleteAccomodation,getAllAccomodation } from "../controllers/accomodation.controller.js";

const router = express.Router();

router.post("/newAccomodation",createAccomodation);
router.delete("/delete/:id",deleteAccomodation)
router.get("/",getAllAccomodation)


export default router;