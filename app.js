const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('./haoqing'))


app.listen(3080, () => console.log('app listening on port 3080!'));