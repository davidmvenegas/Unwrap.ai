import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql"
import { DataSource } from "typeorm"
import { SentenceClusterMapping } from "../../Entities/MappingEntity"
import { FeedbackSentences } from "../../Entities/SentenceEntity"
import { FeedbackClusters } from "../../Entities/ClusterEntity"
import { SentenceType } from "./SentenceType"

export const ClusterType = new GraphQLObjectType({
    name: "Cluster",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        accepted: { type: GraphQLInt },
        sentences: {
            type: new GraphQLList(SentenceType),
            resolve: async (clust) => {
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
                        `SELECT s.id, s.sentence_text, s.order_within_feedback_entry, s.feedback_date, s.unstructured FROM feedback_sentences s INNER JOIN sentence_cluster_mapping m ON m.sentence_id = s.id WHERE m.cluster_id = ?`, [clust.id]
                    )
                    return data
                })()
            }
        }
    })
})