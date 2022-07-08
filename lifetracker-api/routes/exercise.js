const express=require("express");
const {createUserJwt}=require("../utils/tokens")
const security=require("../middleware/security")
const router=express.Router();
const Exercise = require("../models/exercise")


router.post("/create",security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // take the users email and password and create a new user in our database
    const exercise = await Exercise.createExercise(req.body);
    return res.status(200).json({ exercise });
  } catch (err) {
    next(err);
  }
});

router.post("/",security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const {user_id}=res.locals?.user
    // take the users email and password and create a new user in our database
    const exercise = await Exercise.fetchAllExerciseByUserId(user_id);
    return res.status(200).json({ exercise });
  } catch (err) {
    next(err);
  }
});

router.get("/:exerciseId", security.requireAuthenticatedUser, async function (req, res, next) {
  try {
      const exerciseId = req.params.exerciseId
      const exercise = await Exercise.fetchExerciseById(exerciseId)
      return res.status(201).json({ exercise })
  } catch (err) {
      next(err)
  }
})

module.exports=router;