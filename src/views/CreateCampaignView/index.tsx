import Button from '@/components/Button'
import TextField from '@/components/TextField'
import useCreateProposal from '@/hooks/useCreateProposal'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  CreateCampaignViewContainer,
  CreateCampaignViewContent,
  CreateCampaignViewDescription,
  CreateCampaignViewTitle,
} from './style'

const CreateCampaignView = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [amount, setAmount] = useState<string>('')

  const { data: creationProposalResponse, loading: isCreatingProposal, createProposal } = useCreateProposal()

  const handleCreateProposal = async () => {
    console.log('[CreateCampaignView] - Data', {
      title,
      description,
      amount,
    })
    await createProposal(title, description, Number(amount))
  }

  useEffect(() => {
    if (creationProposalResponse && !isCreatingProposal) {
      setTitle('')
      setDescription('')
      setAmount('')

      toast.success(`Proposal has been successfully created! Proposal ID: ${creationProposalResponse}`)
    }
  }, [creationProposalResponse, isCreatingProposal])

  return (
    <CreateCampaignViewContainer>
      <CreateCampaignViewTitle>Create Campaign</CreateCampaignViewTitle>
      <CreateCampaignViewDescription>
        Create a campaign for the community to vote. Once the voting has been passed and approved by the community, the
        campaign will be available to receive donation from the community.
      </CreateCampaignViewDescription>
      <CreateCampaignViewContent>
        <TextField label="Title" type="text" handleChange={(text) => setTitle(text)} />
        <TextField label="Description" type="textarea" handleChange={(text) => setDescription(text)} />
        <TextField label="Target Amount" type="number" handleChange={(text) => setAmount(text)} />
        <Button label="Create" isLoading={isCreatingProposal} handleClick={handleCreateProposal}></Button>
      </CreateCampaignViewContent>
    </CreateCampaignViewContainer>
  )
}

export default CreateCampaignView
