import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import errorHandler from "./middleware/errorHandler.js";
import userRoute from "./controllers/userController.js";
import verifyToken from "./middleware/verifyToken.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();

app.use("/api/users", userRoute);

app.use(errorHandler);
app.use(verifyToken);

export default app;
