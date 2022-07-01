const express=require("express");
const {createUserJwt}=require("../utils/tokens")
const security=require("../middleware/security")
const router=express.Router();
const Nutrition = require("../models/nutrition")


router.post("/create", async (req, res, next) => {
  try {
    // take the users email and password and create a new user in our database
    const nutrition = await Nutrition.createNutrition(req.body);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // take the users email and password and create a new user in our database
    const nutrition = await Nutrition.showNutrition(req.body);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

module.exports=router;