import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./connectdb/connection.js";
import PostRoutes from "./routes/PostRoutes";
import DalleRoutes from "./routes/DalleRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/dalle", DalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(8080, () =>
      console.log("server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
