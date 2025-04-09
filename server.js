const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const validator = require('validator');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

function generateSensorData() {
  const temperature = (Math.random() * 40).toFixed(2); // 0 à 40 degrés
  const humidity = (Math.random() * 100).toFixed(2); // 0 à 100%

  // Validation avec validator.js
  if (!validator.isFloat(temperature, { min: 0, max: 50 })) return null;
  if (!validator.isFloat(humidity, { min: 0, max: 100 })) return null;

  return { 
    timestamp: new Date().toISOString(),
    temperature: parseFloat(temperature),
    humidity: parseFloat(humidity)
  };
}

setInterval(() => {
  const data = generateSensorData();
  if (data) io.emit('sensorData', data);
}, 2000);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
