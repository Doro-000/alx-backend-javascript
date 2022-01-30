const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen(7865, '127.0.0.1', () => console.log('API available on localhost port 7865'));

app.get('/', (request, response) => response.end('Welcome to the payment system'));

app.get('/cart/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  if (id !== id) {
    response.sendStatus(404).end();
  } else {
    response.end(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (request, response) => {
  response.json({ payment_methods: { credit_cards: true, paypal: false } });
  response.end();
});

app.post('/login', (request, response) => {
  response.end(`Welcome ${request.body.userName}`);
});
