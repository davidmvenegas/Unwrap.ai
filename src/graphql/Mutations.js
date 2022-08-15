import { gql } from "@apollo/client"

export const UPDATE_CLUSTER_ACCEPTED = gql`
    mutation updateClusterAccepted (
        $cluster_id: Int!
        $accepted: Int!
    ) {
        updateClusterAccepted (
            cluster_id: $cluster_id
            accepted: $accepted
        ) {
            id
        }
    }`

export const UPDATE_SENTENCE_CLUSTER_ID = gql`
    mutation updateSentenceClusterId (
        $sentence_id: Int!
        $cluster_id: Int!
    ) {
        updateSentenceClusterId (
            sentence_id: $sentence_id
            cluster_id: $cluster_id
        ) {
            message
        }
    }`