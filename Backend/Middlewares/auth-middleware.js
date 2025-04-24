import jwt from "jsonwebtoken";
import { User } from "../Models/user.model.js";
// export const authMiddleWare = async (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) {
//     return res
//       .status(401)
//       .json({ msg: "Unauthorized HTTP,Token not provided" });
//   }
//   const jwtToken = token.replace("Bearer", "").trim();
//   try {
//     const isVerified = jwt.verify(jwtToken.process.env.JWT_SECRET);
//     const userData = await User.findOne({ email: isVerified.email }).select({
//       password: 0,
//     });
//     req.user = userData;
//     req.token = token;
//     req.userId = userData._id;
//     next();
//   } catch (error) {
//     return res.status(401).json({ msg: "Invalid Token" });
//   }
// };

export const authMiddleWare = async (req, res, next) => {
  console.log("Auth Middleware Triggered");

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userData = await User.findOne({ email: decoded.email });
    req.user = userData;

    next(); // Proceed to the next middleware
  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
