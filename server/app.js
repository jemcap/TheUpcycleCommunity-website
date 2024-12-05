import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import errorHandler from "./middleware/errorHandler.js";
import userRoute from "./controllers/userController.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", userRoute);

app.use(errorHandler);

export default app;
