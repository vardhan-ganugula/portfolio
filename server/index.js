import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import portfolioRouter from './routes/portfolio.route.js';
import cors from 'cors';


config();
const app = express(); 


// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("MongoDB Connected")).catch(err => console.log("MongoDB Connection Error: ", err));

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/portfolio/projects', portfolioRouter);



// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});