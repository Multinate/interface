import theme from '@/styles/theme'
import styled from 'styled-components'

export const TransactionModalContainer = styled.div`
  position: relative;

  background-color: ${theme.colors.backgroundTwo};
  padding: 20px;
  border-radius: 10px;
  width: 350px;
`

export const TransactionModalTitle = styled.h3`
  position: relative;
  margin: 0;
  padding: 0;

  font-family: ${theme.typography.base};
  color: ${theme.colors.title};

  font-size: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`

export const TransactionModalContent = styled.div`
  position: relative;
`

export const TransactionModalItem = styled.div`
  position: relative;
  display: flex;
  flex-direection: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;

  & p {
    font-family: ${theme.typography.base};
    color: ${theme.colors.text};
    font-size: 18px;

    margin: 0 10px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
