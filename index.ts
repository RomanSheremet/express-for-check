import express from 'express'
import bodyParser from 'body-parser'
import {runDb} from "./src/db";
import {connectPostsToRouter} from "./src/Posts/posts-routers";
import {authorizationRouter} from "./src/Authorization/authorization-routers";
export const app = express()
const port = process.env.PORT || 5000

// create application/json parser
const jsonParserMiddleware = bodyParser.json()
app.use(jsonParserMiddleware)

// соединение роутов с приложением
connectPostsToRouter()
authorizationRouter()


const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp()
