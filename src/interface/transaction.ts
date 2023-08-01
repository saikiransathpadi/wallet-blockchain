export interface TransactionData {
    fromAddress: string | null;
    toAddress: string;
    amount: number;
}

export interface Balance {
    address: string;
}

export interface TransactionHistory {
    address: string;
}
