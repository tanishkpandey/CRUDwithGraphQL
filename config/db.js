import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB connected successfully");
  } catch (err) {
    throw new Error("Error while connecting DB");
  }
};

export default connectToDatabase;
