import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "Please provide valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  firstName: {
    type: String,
    required: [true, "Please provide first name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name"],
    trim: true,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
