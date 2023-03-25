import theme from '@/styles/theme'
import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: ${theme.colors.title};
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 20px;
  border: none;

  & p {
    font-family: ${theme.typography.base};
    font-size: 18px;
    color: ${theme.colors.backgroundTwo};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
