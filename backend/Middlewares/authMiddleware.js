const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id);

        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
          }


        return next();
    } catch (err) {
        console.log("Error in authMiddleware:", err);
        return res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = authMiddleware;