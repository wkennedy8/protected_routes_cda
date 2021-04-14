if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
// app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
