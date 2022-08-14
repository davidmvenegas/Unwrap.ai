import { GraphQLList, GraphQLInt } from "graphql"
import { SentenceClusterMapping } from "../../Entities/MappingEntity"
import { MappingType } from "../Types/MappingType"

export const GET_ALL_MAPPINGS = {
    type: new GraphQLList(MappingType),
    description: 'Get all entries from the mapping table',
    resolve() {
        return SentenceClusterMapping.find()
    },
}