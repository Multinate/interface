import theme from '@/styles/theme'
import styled from 'styled-components'

export const CampaignDetailViewContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CampaignDetailViewTitle = styled.h2`
  position: relative;
  width: 100%;
  font-family: ${theme.typography.base};
  color: ${theme.colors.title};
  font-size: 24px;

  margin-bottom: 10px;

  text-align: left;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 48px;
  }
`

export const CampaignDetailViewContent = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`

export const CampaignDetailViewProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 48px;

  margin: 10px 0;
`

export const CampaignDetailViewDescription = styled.p`
  position: relative;
  width: 100%;

  font-family: ${theme.typography.base};
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.text};

  text-align: left;

  margin: 5px 0;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 18px;
    margin: 10px 0;
  }
`

export const CampaignDetailViewForm = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin: 10px 0;
`
