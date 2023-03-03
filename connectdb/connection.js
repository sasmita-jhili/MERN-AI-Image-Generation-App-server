import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("connected to mongodb"))
    .catch((err) => {
      console.log("failed to connect with mongo");
      console.log(err);
    });
};

export default connectDB;
