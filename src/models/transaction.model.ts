// src/models/transaction.model.ts
import mongoose from 'mongoose';

export interface TransactionDocument extends mongoose.Document {
  fromAddress: string | null;
  toAddress: string;
  amount: number;
  timestamp: number;
}

const transactionSchema = new mongoose.Schema({
  fromAddress: String,
  toAddress: String,
  amount: Number,
  timestamp: Number,
});

const Transaction = mongoose.model<TransactionDocument>('Transaction', transactionSchema);

export default Transaction;
