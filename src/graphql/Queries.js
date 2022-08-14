import { gql } from "@apollo/client"

export const GET_ALL_CLUSTERS = gql`
    query getAllClusters {
        getAllClusters {
            id
            title
            accepted
            sentences {
                id
                sentence_text
                order_within_feedback_entry
                feedback_date
                unstructured
            }
        }
    }`

export const GET_A_SINGLE_CLUSTER = gql`
    query getASingleCluster(
        $cluster_id: Int!
    ) {
        getASingleCluster(
        id: $cluster_id
    ) {
            id
            title
            accepted
        }
    }`

export const GET_ALL_UNSTRUCTURED_SENTENCES = gql`
    query getAllUnstructuredSentences(
        $offset: Int!
    ) {
        getAllUnstructuredSentences(
        offset: $offset
    ) {
            id
            sentence_text
            order_within_feedback_entry
            feedback_date
            unstructured
            total
        }
    }`

    export const GET_A_SINGLE_SENTENCE = gql`
    query getASingleSentence(
        $sentence_id: Int!
    ) {
        getASingleSentence(
        id: sentence_id
    ) {
            id
            sentence_text
            order_within_feedback_entry
            feedback_date
            unstructured
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