import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'
import productRoutes from './routes/product.js'

const app = express();

app.use( bodyParser.json({ limit: "30mb", extended: true }));
app.use( bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use(express.json)

app.use('/posts', postRoutes);
app.use('/api', productRoutes);


// const CONNECTION_URL = 'mongodb+srv://ninshad-mern1234:A14yXF8dkyuefszu@cluster0.zrckji7.mongodb.net/?retryWrites=true&w=majority';


const CONNECTION_URL = 'mongodb+srv://ninshad123:HPRXDrXjUlJ4al2z@cluster0.zrckji7.mongodb.net/?retryWrites=true&w=majority'


const PORT = process.env.PORT || 5000

mongoose.connect( CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
                .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false );                