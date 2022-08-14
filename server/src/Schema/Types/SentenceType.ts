import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql"
import { SentenceClusterMapping } from "../../Entities/MappingEntity"
import { FeedbackSentences } from "../../Entities/SentenceEntity"
import { FeedbackClusters } from "../../Entities/ClusterEntity"
import { DataSource } from "typeorm"

export const SentenceType = new GraphQLObjectType({
    name: "Sentence",
    fields: () => ({
        id: { type: GraphQLInt },
        sentence_text: { type: GraphQLString },
        order_within_feedback_entry: { type: GraphQLInt },
        feedback_date: { type: GraphQLString },
        unstructured: { type: GraphQLInt },
        total: {
            type: GraphQLInt,
            resolve: () => {
                return (async () => {
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
                    const appDataSource = await db.initialize()
                    const data = await appDataSource.createQueryRunner().manager.query(
                        `SELECT COUNT(*) FROM feedback_sentences WHERE unstructured = 1`
                    )
                    return Object.values(data[0])[0]
                })()
            }
        },
    }),
})