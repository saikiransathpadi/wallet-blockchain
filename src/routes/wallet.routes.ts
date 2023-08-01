import express from 'express';
import { addTransactionController, getBalanceController, getTransactionHistoryController } from '../controller/transaction';

const router = express.Router();

// Endpoint for adding a transaction
router.post('/transaction', addTransactionController);

// Endpoint for getting the balance of an address
router.get('/balance/:address', getBalanceController);

// Endpoint for checking transaction history associated with an address
router.get('/transaction-history/:address', getTransactionHistoryController);

export default router;
