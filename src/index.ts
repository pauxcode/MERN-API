import express from 'express'

const APP = express()
const PORT = 3000

APP.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
})