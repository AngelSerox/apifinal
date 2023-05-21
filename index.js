const express = require('express');
const PORT = process.env.PORT || 5000
var app = express();
var fire = require('./fire');
var cors = require('cors');
var bodyParser = require('body-parser');
const { error } = require('console');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(
      '<h1>Diabolos System Security</h1><ul><li><p><b>/ver</b></p></li><li><p><b>POST /insertar</b>  => {ID, Sensor_PIR, nombre, Fecha}</p></li>')
  })

  app.get('/ver', (req, res) => {
    const db = fire.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      var wholeData = []
      db.collection('/valores').orderBy('ingreso', 'desc').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
        
          wholeData.push(doc.data())
        });
        console.log(wholeData)
        res.send(wholeData)
      })
      .catch(error => {
        console.log('Error!', error);
    })
  })

  app.post('/insertar', (req, res)=>{
    const db = fire.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      
      db.collection('/valores').add({
       
        usuario: req.body.nombre,
        ingreso: new Date().toJSON()
        
      });
      res.send({
        usuario: req.body.nombre,
        ingreso: new Date().toJSON(),
        status: 'Valores insertados!'
    })
  })
  

  app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
  });