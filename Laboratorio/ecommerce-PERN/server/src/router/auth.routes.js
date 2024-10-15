import { Router } from "express";

const router = Router();

router.post("/signup", (req, res) => {
  res.json({ message: "Signup route" });
});

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
