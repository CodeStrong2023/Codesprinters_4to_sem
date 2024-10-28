import Router from "express-promise-router";
import {
  signup,
  profile,
  signin,
  signout,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/logout", signout);

router.get("/profile", isAuth, profile);

export default router;
