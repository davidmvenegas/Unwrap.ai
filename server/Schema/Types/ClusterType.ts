import { GraphQLObjectType, GraphQLInt, GraphQLString } from "graphql"

export const ClusterType = new GraphQLObjectType({
    name: "Cluster",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        accepted: { type: GraphQLInt },
    }),
})