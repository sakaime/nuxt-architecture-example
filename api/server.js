const express = require('express')
const app = express()

app.post('/api/v1/users/create', (_, res) =>
  res.json(require('./mocks/users/test.json'))
)

// eslint-disable-next-line no-console
app.listen(8000, () => console.log('API Mock Server is running'))
