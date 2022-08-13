import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql"

export const SentenceType = new GraphQLObjectType({
    name: "Sentence",
    fields: () => ({
        id: { type: GraphQLInt },
        sentence_text: { type: GraphQLString },
        order_within_feedback_entry: { type: GraphQLInt },
        feedback_date: { type: GraphQLString },
    }),
})