import { GraphQLInt } from "graphql"
import { SentenceClusterMapping } from "../../Entities/MappingEntity"
import { SentenceType } from "../Types/SentenceType"

export const UPDATE_SENTENCE_CLUSTER_ID = {
    type: SentenceType,
    description: "Update a sentence's cluster id",
    args: {
        sentence_id: { type: GraphQLInt },
        cluster_id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const { sentence_id, cluster_id } = args
        await SentenceClusterMapping.update({ sentence_id: sentence_id }, { cluster_id: cluster_id })
        return { successful: true, message: "MAPPING TABLE UPDATED" }
    }
}