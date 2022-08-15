import { GraphQLInt } from "graphql"
import { SentenceClusterMapping } from "../../Entities/MappingEntity"
import { FeedbackSentences } from "../../Entities/SentenceEntity"
import { SentenceType } from "../Types/SentenceType"

export const ADD_SENTENCE_CLUSTER_ID = {
    type: SentenceType,
    description: "Add a sentence's cluster id",
    args: {
        sentence_id: { type: GraphQLInt },
        cluster_id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const { sentence_id, cluster_id } = args
        await SentenceClusterMapping.insert({ sentence_id, cluster_id })
        await FeedbackSentences.update({ id: sentence_id }, { unstructured: 0 })
        return { successful: true, message: "INSERTED INTO MAPPING TABLE" }
    }
}

export const REMOVE_SENTENCE_CLUSTER_ID = {
    type: SentenceType,
    description: "Remove a sentence's cluster id",
    args: {
        sentence_id: { type: GraphQLInt },
        cluster_id: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const { sentence_id, cluster_id } = args
        await SentenceClusterMapping.delete({ sentence_id, cluster_id })
        await FeedbackSentences.update({ id: sentence_id }, { unstructured: 1 })
        return { successful: true, message: "REMOVED FROM MAPPING TABLE" }
    }
}