import { User } from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import { Booking } from "../Models/booking.model.js";
import { Receipt } from "../Models/receipt.mode.js";
// import { sendVarificationEmail, sendWelcomeEmail } from "../Mailtrap/emails.js";
import { generateTokenAndSetCookies } from "../Utils/generateTokenAndSetCookies.js";
export const Signup = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (!email || !name || !password) {
      throw new Error("All fields are required");
    }
    const isUserAlreadyExists = await User.findOne({ email });
    if (isUserAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await newUser.save();
    generateTokenAndSetCookies(res, newUser._id, newUser.email);
    // await sendVarificationEmail(newUser.email, verificationToken);
    res.status(201).json({
      success: true,
      message: "user created succesfully",
      user: {
        ...newUser._doc,
        password: undefined,
      },
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or Expired Verification code",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();
    // await sendWelcomeEmail(user.email, user.name);
    res.status(201).json({
      success: true,
      message: "Email verified succesfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {}
};

export const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password using bcrypt
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = generateTokenAndSetCookies(res, user._id, user.email);

    // Send success response with token
    res.status(200).json({
      message: "Login successful",
      token, // Send token in response
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const user = async (req, res) => {
  try {
    const userData = req.user;
    // console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const bookingWithReceipt = async (req, res) => {
  const userId = req.user._id;

  try {
    const { country, place, date, travelers, roomType, total } = req.body;
    // console.log(date, travelers, roomType, total);
    if (!country || !place || !date || !travelers || !roomType || !total) {
      throw new Error("All fields are required");
    }
    const newBooking = await Booking.create({
      country: country,
      place: place,
      bookingDate: date,
      travelers: travelers,
      roomType: roomType,
      total: total,
      user: userId,
    });
    const bookingId = newBooking._id;

    const newReceipt = Receipt.create({
      country: country,
      place: place,
      bookingDate: date,
      travelers: travelers,
      roomType: roomType,
      total: total,
      booking: bookingId,
    });
    if (!newBooking || !newReceipt) {
      return res.status(400).json({ message: "Booking creation failed" });
    }
    return res.status(201).json({
      message: "Booking and receipt created successfully",
      booking: newBooking,
      receipt: newReceipt,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getReceipts = async (req, res) => {
  try {
    console.log("inside getreceipts");
    const receipts = await Receipt.find();
    console.log(receipts);
    if (receipts.length === 0) {
      return res.status(400).json({ message: "No receipts Found", receipts });
    }
    res.status(200).json({ receipts });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
