import { GraphQLList, GraphQLInt } from "graphql"
import { FeedbackSentences } from "../../Entities/SentenceEntity"
import { SentenceType } from "../Types/SentenceType"

export const GET_ALL_UNSTRUCTURED_SENTENCES = {
    type: new GraphQLList(SentenceType),
    description: 'Get all unstructured sentences',
    args: {
        offset: { type: GraphQLInt },
    },
    resolve(parent: any, args: any) {
        const { offset } = args
        return FeedbackSentences.find({
            where: {
                unstructured: 1
            },
            order: {
                id: 'ASC'
            },
            skip: offset,
            take: 25
        })
    },
}

export const GET_A_SINGLE_SENTENCE = {
    type: new GraphQLList(SentenceType),
    description: 'Get a single sentence',
    args: {
        sentence_id: { type: GraphQLInt },
    },
    resolve(parent: any, args: any) {
        const { sentence_id } = args
        return FeedbackSentences.find({
            where: { id: sentence_id },
        })
    },
}