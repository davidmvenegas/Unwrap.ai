import { GraphQLList, GraphQLInt } from "graphql"
import { FeedbackSentences } from "../../Entities/SentenceEntity"
import { SentenceType } from "../Types/SentenceType"

export const GET_ALL_SENTENCES = {
    type: new GraphQLList(SentenceType),
    description: 'Get all sentences',
    resolve() {
        return FeedbackSentences.find()
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