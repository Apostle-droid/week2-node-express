require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON bodies
app.use(express.json());

// Custom middleware to log requests (Bonus requirement)
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// GET / -> Responds with "My Week 2 API!"
app.get('/', (req, res) => {
  res.send('My Week 2 API!');
});

// POST /user -> Responds with greeting or 400 if name/email is missing
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Missing name or email');
  }
  res.send(`Hello, ${name}!`);
});

// GET /user/:id -> Responds with "User [id] profile"
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} profile`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});