import { Balance, TransactionData, TransactionHistory } from '../interface/transaction';
import Transaction from '../models/transaction.model';

export const addTransaction = async ({ fromAddress, toAddress, amount }: TransactionData) => {
    const transaction = new Transaction({ fromAddress, toAddress, amount, timestamp: Date.now() });
    await transaction.save();
};

export const getBalance = async ({ address }: Balance) => {
    const transactions = await Transaction.find({
        $or: [{ fromAddress: address }, { toAddress: address }],
    });

    let balance = 0;
    for (const transaction of transactions) {
        if (transaction.fromAddress === address) {
            balance -= transaction.amount;
        }
        if (transaction.toAddress === address) {
            balance += transaction.amount;
        }
    }
    return balance
};

export const getTransactionHistory = async ({ address }: TransactionHistory) => {
    const transactions = await Transaction.find({
        $or: [{ fromAddress: address }, { toAddress: address }],
    }).sort({ timestamp: 'desc' });
    return transactions;
};
