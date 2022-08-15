import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { GET_ALL_UNSTRUCTURED_SENTENCES, GET_A_SINGLE_SENTENCE } from "./Queries/SentenceQueries"
import { ADD_SENTENCE_CLUSTER_ID, REMOVE_SENTENCE_CLUSTER_ID } from "./Mutations/SentenceMutations"
import { GET_ALL_CLUSTERS, GET_A_SINGLE_CLUSTER } from "./Queries/ClusterQueries"
import { UPDATE_CLUSTER_ACCEPTED } from "./Mutations/ClusterMutations"
import { GET_ALL_MAPPINGS } from "./Queries/MappingQuieries"

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUnstructuredSentences: GET_ALL_UNSTRUCTURED_SENTENCES,
        getASingleSentence: GET_A_SINGLE_SENTENCE,
        getASingleCluster: GET_A_SINGLE_CLUSTER,
        getAllClusters: GET_ALL_CLUSTERS,
        getAllMappings: GET_ALL_MAPPINGS,
    },
})

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        removeSentenceClusterId: REMOVE_SENTENCE_CLUSTER_ID,
        updateClusterAccepted: UPDATE_CLUSTER_ACCEPTED,
        addSentenceClusterId: ADD_SENTENCE_CLUSTER_ID,
    },
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
})