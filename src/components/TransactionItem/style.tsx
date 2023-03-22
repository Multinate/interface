import theme from '@/styles/theme'
import styled, { css } from 'styled-components'

export const TransactionItemContainer = styled.div<{ clickable?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  max-width: 880px;
  background-color: ${theme.colors.backgroundTwo};
  border-radius: 10px;

  margin: 10px 0;
  padding: 20px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${({ clickable }) =>
    clickable
      ? css`
          transition-duration: 0.3s;
          cursor: pointer;

          &:hover {
            box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25);
            transition-duration: 0.3s;
          }
        `
      : ``}
`

export const TransactionItemData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-contnet: flex-start;

  & p {
    font-family: ${theme.typography.base};
    font-weight: 700;
    font-size: 18px;
    color: ${theme.colors.text};
  }

  & label {
    font-family: ${theme.typography.base};
    font-weight: 300;
    font-size: 12px;
    color: ${theme.colors.text};
  }
`
