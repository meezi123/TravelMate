import jwt from "jsonwebtoken";

export const generateTokenAndSetCookies = (res, userId, email) => {
  const token = jwt.sign(
    { userId: userId, email: email },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return token;
};
