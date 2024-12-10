const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const connectDB = require("./db/db");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require("./Routes/userRoutes");

// Connect to MongoDB
connectDB();

// Enable CORS
const corsOptions = {
    origin: process.env.FRONTEND_URL, 
    credentials: true, 
  };

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/users", userRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
