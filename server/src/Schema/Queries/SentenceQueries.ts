import { GraphQLList, GraphQLInt, GraphQLString } from "graphql"
import { FeedbackSentences } from "../../Entities/SentenceEntity"
import { SentenceType } from "../Types/SentenceType"
import { Like } from "typeorm"

export const GET_ALL_UNSTRUCTURED_SENTENCES = {
    type: new GraphQLList(SentenceType),
    description: 'Get all unstructured sentences',
    args: {
        offset: { type: GraphQLInt },
        keyword: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { offset, keyword } = args

        const sentenceCount = await FeedbackSentences.count({
            where: {
                unstructured: 1,
                sentence_text: Like(`%${keyword}%`)
            }
        })

        const sentences = await FeedbackSentences.find({
            where: {
                unstructured: 1,
                sentence_text: Like(`%${keyword}%`)
            },
            order: {
                id: 'ASC'
            },
            skip: offset,
            take: 25
        })

        const result = sentences.map((sentence) => {
            return { total: sentenceCount, ...sentence}
        })

        return result

    }
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