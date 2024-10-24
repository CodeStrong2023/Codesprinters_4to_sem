import Router from "express-promise-router";
import { signup } from "../controllers/auth.controller.js";
const router = Router();

router.post("/signup", signup);

router.post("/signin", (req, res) => {
  res.json({ message: "Signin route" });
});

router.post("/logout", (req, res) => {
  res.json({ message: "Logout route" });
});

router.get("/profile", (req, res) => {
  res.json({ message: "Profile route" });
});

export default router;
