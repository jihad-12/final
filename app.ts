import 'reflect-metadata';
import express from 'express';
import  create  from 'typeorm';
import productRoutes from './routes/Product.js';
import categoryRoutes from './routes/Category.js';
import shopRoutes from './routes/Shop.js';
import { errorHandler } from './Errors/Error.js';
import dataSource from './Database/dbConfig.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/shops', shopRoutes);

app.use(errorHandler);

dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});
app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;