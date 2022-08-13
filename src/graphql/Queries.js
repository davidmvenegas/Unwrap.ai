import { gql } from "@apollo/client"

export const GET_ALL_CLUSTERS = gql`
    query getAllClusters {
        getAllClusters {
            id
            title
            accepted
        }
    }`

export const GET_A_SINGLE_CLUSTER = gql`
    query getASingleCluster(
        $cluster_id: Number!
    ) {
        getASingleCluster(
        id: $cluster_id
    ) {
            id
            title
            accepted
        }
    }`

export const GET_ALL_SENTENCES = gql`
    query getAllSentences {
        getAllSentences {
            id
            sentence_text
            order_within_feedback_entry
            feedback_date
        }
    }`

    export const GET_A_SINGLE_SENTENCE = gql`
    query getASingleSentence(
        $sentence_id: Number!
    ) {
        getASingleSentence(
        id: sentence_id
    ) {
            id
            sentence_text
            order_within_feedback_entry
            feedback_date
        }
    }`

    export const GET_ALL_MAPPINGS = gql`
    query getAllMappings {
        getAllMappings {
            id
            sentence_id
            cluster_id
        }
    }`