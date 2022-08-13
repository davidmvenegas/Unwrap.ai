import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { GET_ALL_SENTENCES, GET_A_SINGLE_SENTENCE } from "./Queries/SentenceQueries"
import { GET_ALL_CLUSTERS, GET_A_SINGLE_CLUSTER } from "./Queries/ClusterQueries"
import { UPDATE_SENTENCE_CLUSTER_ID } from "./Mutations/SentenceMutations"
import { UPDATE_CLUSTER_ACCEPTED } from "./Mutations/ClusterMutations"
import { GET_ALL_MAPPINGS } from "./Queries/MappingQuieries"

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getASingleSentence: GET_A_SINGLE_SENTENCE,
        getASingleCluster: GET_A_SINGLE_CLUSTER,
        getAllSentences: GET_ALL_SENTENCES,
        getAllClusters: GET_ALL_CLUSTERS,
        getAllMappings: GET_ALL_MAPPINGS,
    },
})

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        updateSentenceClusterId: UPDATE_SENTENCE_CLUSTER_ID,
        updateClusterAccepted: UPDATE_CLUSTER_ACCEPTED,
    },
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
})