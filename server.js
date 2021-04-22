import randomNumbers from './utils/random.js';
import proyectInfo from './utils/info.js';
import operation from './utils/operaciones.js'
import express from 'express' ;

const app  = express(),
      PORT = 8080;
 
app.use(express.static('public'));

app.get('/random',(req, res) => {
  res.send(randomNumbers())
})

app.get('/info',async (req, res) => {
  res.send(await proyectInfo())
})

app.get('/operaciones',async (req, res) => {
  res.send(operation(req.query));
})
 
const server = app.listen(process.env.PORT || PORT, () => {
  console.log('*-------------------- - -------------------------*')
  console.log(`Servidor listo para operar en el PUERTO: ${PORT}`)
  console.log('*-------------------- - -------------------------*')
  })

server.on('error', error => console.log(`Server error => ${error}`));