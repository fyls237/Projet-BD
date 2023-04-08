import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import Scan from './db/models/NmapModel'

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/nmap', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.post('/scan', async (req, res) => {
  const { options } = req.body;
  const exec = require('child_process').exec

  // Exécute la commande Nmap avec les options spécifiées
  exec(`nmap ${options}`, async (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Une erreur est survenue lors de l\'exécution de la commande Nmap.')
    }
    try {
      const scan = await Scan.create({ options, results: stdout })
      res.json(scan)
    } catch (err) {
      console.error(err)
      res.status(500).send('Une erreur est survenue lors de la sauvegarde des résultats de la commande Nmap.')
    }
  })
})

app.listen(5000, () => {
  console.log('Le serveur est démarré sur le port 5000.');
})