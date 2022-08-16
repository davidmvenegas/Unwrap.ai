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

export const ADD_SENTENCE_CLUSTER_ID = gql`
    mutation addSentenceClusterId (
        $sentence_id: Int!
        $cluster_id: Int!
    ) {
        addSentenceClusterId (
            sentence_id: $sentence_id
            cluster_id: $cluster_id
        ) {
            id
        }
    }`

export const REMOVE_SENTENCE_CLUSTER_ID = gql`
    mutation removeSentenceClusterId (
        $sentence_id: Int!
    ) {
        removeSentenceClusterId (
            sentence_id: $sentence_id
        ) {
            id
        }
    }`