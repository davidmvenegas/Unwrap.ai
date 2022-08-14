import { GraphQLInt } from "graphql"
import { ClusterType } from "../Types/ClusterType"
import { FeedbackClusters } from "../../Entities/ClusterEntity"

export const UPDATE_CLUSTER_ACCEPTED = {
    type: ClusterType,
    description: "Update whether a cluster is accepted",
    args: {
        cluster_id: { type: GraphQLInt },
        accepted: { type: GraphQLInt },
    },
    async resolve(parent: any, args: any) {
        const { cluster_id, accepted } = args
        await FeedbackClusters.update({ id: cluster_id }, { accepted: accepted })
        return { successful: true, message: "CLUSTER UPDATED" }
    }
}