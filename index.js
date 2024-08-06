import express from 'express';
import userRouter from './src/routes/user.route.js';
import DataBaseConnection from './src/database/db.js';


const app = express();


app.use(express.json());

const PORT = 3000;

DataBaseConnection()
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));