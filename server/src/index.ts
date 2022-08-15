import { SentenceClusterMapping } from './Entities/MappingEntity'
import { FeedbackSentences } from './Entities/SentenceEntity'
import { FeedbackClusters } from './Entities/ClusterEntity'
import { graphqlHTTP } from 'express-graphql'
import { DataSource } from 'typeorm'
import { schema } from './Schema/schema'
import express from 'express'
import cors from 'cors'

const db = new DataSource({
    host: "coding-challenge.csxeniesqyv1.us-east-2.rds.amazonaws.com",
    port: 3306,
    database: "davidvenegas",
    username: "davidvenegas",
    password: "password123",
    type: "mysql",
    logging: true,
    synchronize: false,
    entities: [
        FeedbackClusters,
        FeedbackSentences,
        SentenceClusterMapping,
    ],
})

db.initialize()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(5000, () => console.log("Server running on port 5000..."))