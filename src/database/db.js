import mongoose from "mongoose";

const DataBaseConnection =  async () => {
    console.log("Waiting for connection!");

    try {
        await mongoose.connect('');
        console.log("MongoDB Atlas Connected");
    } catch (error) {
        console.log(error);
    }
}

export default DataBaseConnection;