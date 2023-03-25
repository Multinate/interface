export interface SpaceEntity {
  id?: string
  name?: string
}

export interface ProposalEntity {
  id?: string
  title?: string
  body?: string
  choices?: string[]
  start?: number
  end?: number
  snapshot?: string
  space?: SpaceEntity
  state?: string
  author?: string
  votes?: number
  scores_by_strategy?: number[][]
}

export interface VoteEntity {
  voter?: string
  choice?: number
  proposal?: { id: string }
}
