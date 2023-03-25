import request, { gql } from 'graphql-request'
import config from '@/utils/Config'
import { VoteEntity } from '@/utils/subgraphEntity'

export const getVotesByProposalId = async (id: string): Promise<VoteEntity[]> => {
  try {
    const response: {
      votes: VoteEntity[]
    } = await request(
      `${config.snapshot_graphql}/graphql`,
      gql`
        query Votes($proposalId: String) {
          votes(where: { proposal_in: [$proposalId] }) {
            voter
            choice
            proposal {
              id
            }
          }
        }
      `,
      {
        proposalId: id,
      },
    )

    return response.votes || []
  } catch (error) {
    console.log('fetching votes', error)
    return []
  }
}
