const router = require("express").Router();
const {userVerification} = require("../middlewares/AuthMiddleware");

router.get("/dashboard-data", userVerification, (req, res) => {
  res.json({ message: "Dashboard access granted", user: req.user });
});

module.exports = router;