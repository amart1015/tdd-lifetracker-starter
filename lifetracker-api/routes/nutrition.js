const express=require("express");
const {createUserJwt}=require("../utils/tokens")
const security=require("../middleware/security")
const router=express.Router();
const Nutrition = require("../models/nutrition")


router.post("/create",security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // take the users email and password and create a new user in our database
    const nutrition = await Nutrition.createNutrition(req.body);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

router.post("/",security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const {user_id}=res.locals?.user
    // take the users email and password and create a new user in our database
    const nutrition = await Nutrition.fetchAllNutritionsByUserId(user_id);
    return res.status(200).json({ nutrition });
  } catch (err) {
    next(err);
  }
});

router.get("/:nutritionId", security.requireAuthenticatedUser, async function (req, res, next) {
  try {
      const nutritionId = req.params.nutritionId
      const nutrition = await Nutrition.fetchNutritionById(nutritionId)
      return res.status(201).json({ nutrition })
  } catch (err) {
      next(err)
  }
})

module.exports=router;