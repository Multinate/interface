import theme from '@/styles/theme'
import styled, { keyframes } from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: ${theme.colors.title};
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 20px;
  border: none;

  margin: 5px 0;

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

const spin = () => keyframes`
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
`

export const ButtonSpinner = styled.div`
  position: relative;
  height: 22px;
  width: 22px;
  animation: ${spin()} 1s infinite;
`
