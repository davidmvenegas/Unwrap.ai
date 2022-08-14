import { GraphQLList, GraphQLInt } from "graphql"
import { FeedbackClusters } from "../../Entities/ClusterEntity"
import { ClusterType } from "../Types/ClusterType"

export const GET_ALL_CLUSTERS = {
    type: new GraphQLList(ClusterType),
    description: 'Get all clusters',
    resolve() {
        return FeedbackClusters.find({
            order: {
                id: 'ASC'
            },
        })
    },
}

export const GET_A_SINGLE_CLUSTER = {
    type: new GraphQLList(ClusterType),
    description: 'Get a single cluster',
    args: {
        cluster_id: { type: GraphQLInt },
    },
    resolve(parent: any, args: any) {
        const { cluster_id } = args
        return FeedbackClusters.find({
            where: { id: cluster_id },
        })
    },
}