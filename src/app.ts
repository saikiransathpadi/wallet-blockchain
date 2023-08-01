// src/app.ts
import express from 'express';
// import mongoose from 'mongoose';
import walletRoutes from './routes/wallet.routes';

const app = express();

app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb+srv://letschatsaki:fUI4VccZO1xOilOa@cluster0.gnjf436.mongodb.net/?retryWrites=true&w=majority', {});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use('/wallet/', walletRoutes);

app.get('/wallet/health', (req, res) => {
    return res.status(200).json({ message: 'Wallet service is up and running' });
});

app.use('*', (req, res) => {
    return res.status(404).json({ message: 'Route Not Found' });
});

export default app;
