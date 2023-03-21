import theme from '@/styles/theme'
import styled from 'styled-components'

export const CampaignDetailViewContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

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
  font-size: 48px;

  margin-bottom: 20px;

  text-align: left;
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
`
