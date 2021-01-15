const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Greetings From Bhaskar App')
})

app.get('/about', (req, res) => {
    res.send("Accesing the about page")
  })
  
  app.get('/contact', (req, res) => {
    res.send("accesing the contact page ")
  })
  
  app.get('/help', (req, res) => {
    res.send(`accessing the help page`)
  })

  app.get('/help/:topic', (req, res) => {
    res.send(`your request on the help page ${req.params.topic}`)
  })
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
