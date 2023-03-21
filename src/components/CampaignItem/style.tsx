import theme from '@/styles/theme'
import styled from 'styled-components'

export const CampaignItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  max-width: 880px;
  background-color: ${theme.colors.backgroundTwo};
  border-radius: 10px;

  min-height: 140px;
  margin: 10px 0;
  padding: 20px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
    transition-duration: 0.3s;
    // transform: scale(1.01);
  }
`

export const CampaignItemSection = styled.div<{ width: number }>`
  position: relative;
  height: 100%;
  width: ${({ width }) => (width ? `${width}%` : '100%')};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const CampaignItemTitle = styled.h3`
  font-family: ${theme.typography.base};
  font-weight: 600;
  color: ${theme.colors.text};
  font-size: 24px;

  margin-bottom: 10px;
`

export const CampaignItemDescription = styled.p`
  font-family: ${theme.typography.base};
  font-weight: 400;
  color: ${theme.colors.text};
  font-size: 18px;
`

export const CampaignItemPercentage = styled.p`
  font-family: ${theme.typography.base};
  font-weight: 600;
  color: ${theme.colors.text};
  font-size: 48px;
`

export const CampaignItemPercentageText = styled.p`
  font-family: ${theme.typography.base};
  font-weight: 400;
  color: ${theme.colors.text};
  font-size: 18px;
`
