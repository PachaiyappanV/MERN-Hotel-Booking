import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./db/connect";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/v1/test", (req: Request, res: Response) => {
  res.send("Hello from api endpoint");
});

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
