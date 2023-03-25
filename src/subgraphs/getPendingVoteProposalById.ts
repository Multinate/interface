import request, { gql } from 'graphql-request'
import config from '@/utils/Config'
import { ProposalEntity } from '@/utils/subgraphEntity'

export const getPendingVoteProposalById = async (id: string): Promise<ProposalEntity | null> => {
  try {
    const response: {
      proposals: ProposalEntity[]
    } = await request(
      `${config.snapshot_graphql}/graphql`,
      gql`
        query Proposals($spacename: String, $id: String) {
          proposals(
            first: 100
            skip: 0
            where: { space_in: [$spacename], state: "open", id: $id }
            orderBy: "created"
            orderDirection: desc
          ) {
            id
            title
            body
            choices
            start
            end
            snapshot
            state
            author
            space {
              id
              name
            }
            votes
            scores_by_strategy
          }
        }
      `,
      {
        spacename: config.snapshot_spacename,
        id,
      },
    )

    return response.proposals[0] || null
  } catch (error) {
    console.log('fetching proposal', error)
    return null
  }
}
