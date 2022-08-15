import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql"
import { FeedbackSentences } from "../../Entities/SentenceEntity"

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
                return FeedbackSentences.countBy({unstructured: 1})
            }
        },
    }),
})