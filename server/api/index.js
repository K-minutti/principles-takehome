const router = require("express").Router();
module.exports = router;

router.use("/breeds", require("./breeds"));

router.use((req, res, next) => {
  const err = new Error("Not Found");
  err.code = 404;
  next(err);
});
