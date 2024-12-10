const mongoose = require("mongoose");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:[3,"First name must be at least 3 characters long"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avatar: {
        public_id: {
          type: String,
          
        },
        url: {
          type: String,
          
        },
      },
    role: {
        type: String,
        default: "user",
    },

}, {timestamps: true});

userSchema.statics.hashPassword = async function (password) {
    try {
        const salt = await bycrpt.genSalt(16);
        const hash = await bycrpt.hash(password, salt);
        return hash;
    } catch (err) {
        console.log(err);
    }
};

userSchema.methods.generateAuthToken = async function () {
    try {
       const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || "7d"});
       return token;
    } catch (err) {
        console.log(err);
    }
};

userSchema.methods.comparePassword = async function (password) {
    try {
        const isMatch = await bycrpt.compare(password, this.password);
        return isMatch;
    } catch (err) {
        console.log(err);
    }
};

module.exports = mongoose.model("User", userSchema);