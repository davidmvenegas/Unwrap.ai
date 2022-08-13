import { gql } from "@apollo/client"

export const UPDATE_CLUSTER_ACCEPTED = gql`
    mutation updateClusterAccepted (
        $cluster_id: Number!
        $accepted: Number!
    ) {
        updateClusterAccepted (
            id: $cluster_id
            accepted: $accepted
        ) {
            message
        }
    }`

export const UPDATE_SENTENCE_CLUSTER_ID = gql`
    mutation updateSentenceClusterId (
        $sentence_id: Number!
        $cluster_id: Number!
    ) {
        updateSentenceClusterId (
            sentence_id: $sentence_id
            cluster_id: $cluster_id
        ) {
            message
        }
    }`