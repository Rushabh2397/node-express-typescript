import express from 'express'
import config from '../config'
const app = express()


app.listen(config.port,()=>{
    console.info(`Listening on port ${config.port}`)
})