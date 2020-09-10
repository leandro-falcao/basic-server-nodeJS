const express = require('express')

const servidor = express()

servidor.get('/', (request, response)=>{
  return response.send('ola mundo- serve ta funcionando- na porta: 3300')
})

servidor.listen(3300)