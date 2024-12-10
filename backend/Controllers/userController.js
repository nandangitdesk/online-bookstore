const userModel = require("../Models/userModel");


// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });

    if (isUserAlreadyExist) {
      return res.status(400).json({ error: "User already exist" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = await user.generateAuthToken();


    const cookieExpire = 7 * 24 * 60 * 60 * 1000; 
    res.cookie("token", token, {
      httpOnly: true, 
      expires: new Date(Date.now() + cookieExpire), 
    });


    res
      .status(201)
      .json({ message: "User registered successfully", user, token });
  } catch (err) {
    res
      .status(400)
      .json({ message: "User registration failed", error: err.message });
  }
};


// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = await user.generateAuthToken();
    
    const cookieExpire = 7 * 24 * 60 * 60 * 1000; 
    res.cookie("token", token, {
      httpOnly: true, 
      expires: new Date(Date.now() + cookieExpire), 
    });

    res.status(200).json({ message: "User logged in successfully", user, token });
  } catch (err) {
    res
      .status(400)
      .json({ message: "User login failed", error: err.message });
  }
};



module.exports = {
  registerUser,
  loginUser,
};