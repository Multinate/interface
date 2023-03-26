import theme from '@/styles/theme'
import styled from 'styled-components'

export const CreateCampaignViewContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  max-width: 750px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CreateCampaignViewTitle = styled.h2`
  position: relative;
  width: 100%;
  font-family: ${theme.typography.base};
  color: ${theme.colors.title};
  font-size: 24px;

  margin-bottom: 20px;

  text-align: left;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 48px;
  }
`

export const CreateCampaignViewDescription = styled.p`
  position: relative;
  width: 100%;
  font-family: ${theme.typography.base};
  color: ${theme.colors.text};
  font-size: 14px;

  margin-bottom: 20px;

  text-align: left;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 18px;
  }
`
export const CreateCampaignViewContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
