import theme from '@/styles/theme'
import styled from 'styled-components'

export const TransactionViewContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TransactionViewTitle = styled.h2`
  position: relative;
  width: 100%;
  font-family: ${theme.typography.base};
  color: ${theme.colors.title};
  font-size: 24px;

  margin-bottom: 20px;

  text-align: left;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    font-size: 48px;
  }
`

export const TransactionViewContent = styled.div`
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
