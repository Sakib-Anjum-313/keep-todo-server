
import mongoose from 'mongoose';


const Connection = () => {

    const MONGODB_URI =
      "mongodb+srv://keeptodo:keeptodo123@keep-to-do.lyfgsmy.mongodb.net/?retryWrites=true&w=majority";
    

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    })
    mongoose.connection.on("disconnected", () => {
      console.log("Database disconnected");
    })

    mongoose.connection.on("error", () => {
      console.log("Error while connecting", error.massage);
    });
}

export default Connection;