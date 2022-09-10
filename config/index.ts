import * as dotenv from 'dotenv'

const path = process.env.NODE_ENVIRONMENT=== 'production' ? '.env' : `.env.${process.env.NODE_ENVIRONMENT || 'local'}`
dotenv.config({path})

export default {
    port : process.env.PORT
}