import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "required 8 characters"],
    select: false,
  },
  contact: {
    type: Number,
    minlength: [10, "required 10 digits"],
    maxlength: [10, "required 10 digits"],
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "nurse"],
    default: "admin",
  },
  createdAt: {
    type: Date,
    Date: Date.now(),
  },
  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

schema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

schema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.ResetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.ResetPasswordExpire = Date.now() + 15 * 60 * 1000;
  console.log(resetToken);
  return resetToken;
};

export const User = mongoose.model("User", schema);
