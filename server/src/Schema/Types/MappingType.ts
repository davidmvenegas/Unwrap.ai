import { GraphQLObjectType, GraphQLInt, GraphQLList } from "graphql"

export const MappingType = new GraphQLObjectType({
    name: "Mapping",
    fields: () => ({
        id: { type: GraphQLInt },
        sentence_id: { type: GraphQLInt },
        cluster_id: { type: GraphQLInt },
    }),
})