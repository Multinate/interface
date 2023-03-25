import theme from '@/styles/theme'
import styled, { css } from 'styled-components'

export const DropdownFieldContainer = styled.div`
  position: relative;
  z-index: 2;
  height: 48px;
  width: 47.5%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.large}) {
    width: 200px;
  }
`

export const DropdownFieldLabel = styled.label`
  position: absolute;
  font-family: ${theme.typography.base};
  background-color: ${theme.colors.backgroundOne};
  padding: 0 2.5px;

  top: -8px;
  left: 12px;
  color: ${theme.colors.text};
  font-size: 12px;
  font-weight: 500;
  z-index: 10;
`

export const DropdownFieldInputContainer = styled.div<{ show: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 13px 0;
  margin: 0 auto;

  border: solid 1px ${theme.colors.text};
  border-radius: 5px;

  background-color: ${theme.colors.backgroundOne};

  height: ${({ show }) => (show ? `400px;` : `48px;`)};

  &:focus {
    border: solid 2px ${theme.colors.title};
  }
`
export const DropdownFieldInput = styled.div<{ show: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
  padding-bottom: ${({ show }) => (show ? `10px` : `0px`)};

  & p {
    font-family: ${theme.typography.base};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    letter-spacing: 0.1em;
  }

  & span {
    position: relative;
    transform: ${({ show }) => (show ? `rotate(180deg)` : `none`)};
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    padding: 0 20px;
  }
`

export const DropdownFieldOptionSelections = styled.div<{ show: boolean }>`
  ${({ show }) =>
    show
      ? css`
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 9px;
        `
      : css`
          display: none;
        `}
`

export const DropdownFieldOption = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background: transparent;
  padding: 5px 0;

  & p {
    font-family: ${theme.typography.base};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    letter-spacing: 0.1em;
    margin-left: 10px;
  }

  @media screen and (min-width: ${theme.breakpoints.medium}) {
    & p {
      margin-left: 20px;
    }
  }
`
