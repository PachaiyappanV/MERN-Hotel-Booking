import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import { connectDB } from "./db/connect";
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleWare from "./middleware/error-handler";
import authRouter from "./routes/authRoutes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Database has been connected successfully");
    app.listen(port, () =>
      console.log(`Server is up and running on the port ${port}`)
    );
  } catch (err) {
    console.log(err);
  }
};
start();
