const router = require("express").Router();
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    //TODO: CALL DOG API HERE
    res.json({ Hello: "From breeds!" });
  } catch (err) {
    next(err);
  }
});
