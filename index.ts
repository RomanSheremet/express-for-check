import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import router from './src/router';
const app = express()
const port = process.env.PORT || 5000

app.use(router)

// create application/json parser
const jsonParserMiddleware = bodyParser.json()
app.use(jsonParserMiddleware)

app.get('/', (req: Request, res: Response ) => {
    res.send('Hello: World!!!!!!!!!!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})