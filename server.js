require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,  // 30 seconds timeout
    socketTimeoutMS: 5000    // 45 seconds socket timeout
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


//import and use routes
const userRouter = require('./routes/userRoutes');
app.use('/api/users',userRouter);


// Basic route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
