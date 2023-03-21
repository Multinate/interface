import theme from '@/styles/theme'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const ProgressBarBase = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;

  height: 20px;
  background-color: ${theme.colors.backgroundTwo};
  border-radius: 15px;

  margin-bottom: 10px;
`

export const ProgressBarFilled = styled.div<{ rightEndCurved: boolean; toWidth: number }>`
  position: absolute;
  height: 20px;
  left: 0;
  top: 0;

  width: ${({ toWidth }) => (toWidth ? toWidth : 100)}%;

  background-color: ${theme.colors.title};

  border-radius: ${({ rightEndCurved }) => (rightEndCurved ? '15px' : '15px 0 0 15px')};

  animation: ${({ toWidth }) => grow(toWidth)} 2s ease-out;
`

export const ProgressBarText = styled.p`
  font-family: ${theme.typography.base};
  font-weight: 400;
  font-size: 18px;
  color: ${theme.colors.text};
`

const grow = (isWidth: number) => keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: ${isWidth}%;
  }
`
