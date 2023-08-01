import mongoose from 'mongoose';

export const connectMongoDb = async () => {
    try {
        console.log('Connecting to db.....');
        mongoose.set('strictQuery', true);
        const dbResp: any = await mongoose.connect(
            'mongodb+srv://letschatsaki:fUI4VccZO1xOilOa@cluster0.gnjf436.mongodb.net/wallet_blockchain?retryWrites=true&w=majority',
            { dbName: process.env.DB_NAME, autoCreate: true, autoIndex: true }
        );
        console.log('connectd to DB', dbResp.connection.host, dbResp.connection.name);
    } catch (error) {
        console.log('Error While connecting DB', error);
    }
};
