import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

import productRoute from "./routes/product.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

// const PORT = 8800;
const PORT = process.env.PORT || 8800;
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "product-ability", // Specify the desired database name
        });

        console.log("connected to mongodb");
    } catch (error) {
        // handleError(error);
        console.log("failed to connect");
    }
};

// middleware
app.use(
    cors({
        origin: "https://aesthetic-youtiao-a4a32b.netlify.app/",
        credentials: true,
    })
);
// app.use(cors());
app.use(express.json());

app.use(cookieParser());

// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
});

app.get("/", (req, res) => {
    res.send("Hey works...");
});
app.listen(PORT, () => {
    connect();
    console.log(`Backend server is running on ${PORT}`);
});
