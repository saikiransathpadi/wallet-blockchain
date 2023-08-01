import express from 'express';
import walletRoutes from './routes/wallet.routes';

const app = express();

app.use(express.json());


// Routes
app.use('/wallet/', walletRoutes);

app.get('/wallet/health', (req, res) => {
    return res.status(200).json({ message: 'Wallet service is up and running' });
});

app.use('*', (req, res) => {
    return res.status(404).json({ message: 'Route Not Found' });
});

export default app;
