const express=require("express");
const {createUserJwt}=require("../utils/tokens")
const security=require("../middleware/security")
const router=express.Router();
const Sleep = require("../models/sleep")


router.post("/create",security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    // take the users email and password and create a new user in our database
    const sleep = await Sleep.createSleep(req.body);
    return res.status(200).json({ sleep });
  } catch (err) {
    next(err);
  }
});

router.post("/",security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const {user_id}=res.locals?.user
    // take the users email and password and create a new user in our database
    const sleep = await Sleep.fetchAllSleepByUserId(user_id);
    return res.status(200).json({ sleep });
  } catch (err) {
    next(err);
  }
});

router.get("/:sleepId", security.requireAuthenticatedUser, async function (req, res, next) {
  try {
      const sleepId = req.params.sleepId
      const sleep = await Sleep.fetchSleepById(sleepId)
      return res.status(201).json({ sleep })
  } catch (err) {
      next(err)
  }
})

module.exports=router;