import request, { gql } from 'graphql-request'
import config from '@/utils/Config'
import { ProposalEntity } from '@/utils/subgraphEntity'

export const getPendingVoteProposals = async (): Promise<ProposalEntity[]> => {
  try {
    const response: {
      proposals: ProposalEntity[]
    } = await request(
      `${config.snapshot_graphql}/graphql`,
      gql`
        query Proposals($spacename: String) {
          proposals(
            first: 100
            skip: 0
            where: { space_in: [$spacename], state: "open" }
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
      },
    )

    return response.proposals || []
  } catch (error) {
    console.log('fetching proposal', error)
    return []
  }
}
