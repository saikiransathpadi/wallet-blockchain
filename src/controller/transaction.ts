import { Request, Response } from 'express';
import { addTransaction, getBalance, getTransactionHistory } from '../db/transaction';
import { TransactionData } from '../interface/transaction';

export const addTransactionController = async (req: Request, res: Response) => {
    try {
        const { fromAddress, toAddress, amount }: TransactionData = req.body;
        if (!fromAddress || !toAddress || !amount) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        await addTransaction({ fromAddress, toAddress, amount });

        return res.status(201).json({ message: 'Transaction added successfully' });
    } catch (error) {
        console.error('Error adding transaction:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getBalanceController = async (req: Request, res: Response) => {
    try {
        const address = req.params.address;
        console.log("getting balance for", address);
        
        const balance = await getBalance({ address });

        return res.status(200).json({ balance });
    } catch (error) {
        console.error('Error getting balance:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getTransactionHistoryController = async (req: Request, res: Response) => {
    try {
        const address = req.params.address;
        const transactions = await getTransactionHistory({ address });

        return res.status(200).json({ transactions });
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
