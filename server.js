import getTimeNow  from './utils/functions';
const express = require('express'),
      app     = express(),
      PORT    = 8080;
 

app.listen(PORT, () => {
console.log(`Servidor listo para operar en el PUERTO: ${PORT}`)
})

app.get('/',(req, res) => {
  res.send('Servidor Express OK')
})
 
