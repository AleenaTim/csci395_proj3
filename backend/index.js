import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

  app.post('/login', async (request, response) => {
    try {
      console.log('Request body:', request.body); // Log incoming request body
      const { username, password } = request.body;
  
      // Validate inputs
      if (!username || !password) {
        return response.status(400).json({ error: 'Username and password are required' });
      }
  
      // Query database
      const user = await User.findOne({ username, password }); // This assumes username/password are plain text
      if (!user) {
        return response.status(401).json({ error: 'Invalid username or password' });
      }
  
      // Send successful response
      response.json({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    } catch (error) {
      console.error('Error during login:', error); // Log error
      response.status(500).json({ error: 'Internal Server Error' });
    }
  });
  