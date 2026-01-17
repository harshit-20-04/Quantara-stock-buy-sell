const {Signup, Login} = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();
router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);

router.get("/checkAuth", (req, res) => {
  if (req.cookies.token) {
    return res.json({ authenticated: true });
  }
  res.status(401).json({ authenticated: false });
});

module.exports = router;