import express from "express";

import {
  user,
  Signin,
  Signup,
  verifyEmail,
  bookingWithReceipt,
  getReceipts,
} from "../Controllers/auth.controller.js";
import { authMiddleWare } from "../Middlewares/auth-middleware.js";
const router = express.Router();

router.post("/signin", Signin);

router.post("/signup", Signup);
router.post("/verify-email", verifyEmail);
router.route("/user").get(authMiddleWare, user);
router.route("/user/booking&receipt").post(authMiddleWare, bookingWithReceipt);
router.route("/user/receipt").get(authMiddleWare, getReceipts);

export default router;
