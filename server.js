import getTimeNow from './utils/time.js';
import randomNumbers from './utils/random.js';
import express from 'express' ;

const app  = express(),
      PORT = 8080;
 

app.get('/',(req, res) => {
  res.send(getTimeNow())
})

app.get('/random',(req, res) => {
  res.send(randomNumbers())
})
 
app.listen(PORT, () => {
  console.log(`Servidor listo para operar en el PUERTO: ${PORT}`)
  })