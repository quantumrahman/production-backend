import mongoose from 'mongoose';
import config from './env.config.js';

const dbConfig = async () => {
    try {
        const uri = config.database_uri;

        await mongoose.connection.on('connected', () => {
            console.log('mongoose connection successfully');
        });

        await mongoose.connection.on('error', (err) => {
            console.log('mongoose connection failure', err.message);
        });

        await mongoose.connect(uri);
    } catch (error) {
        console.log('mongoose connection error', error.message);
        process.exit(1);
    }
};

export default dbConfig;
