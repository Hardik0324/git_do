const express = require("express")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/user", userRoutes)

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on port ${port}`));