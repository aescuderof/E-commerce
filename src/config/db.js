const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dwfs-crud';
        const connection = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 3000, // Timeout más corto
        });
        console.log(`✅ Connected to MongoDB successfully`);
        return connection;
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        console.log('⚠️  Server running in offline mode. Using mock data.');
        return null;
    }
};

module.exports = connectDB;












    







