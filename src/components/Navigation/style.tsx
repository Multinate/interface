import styled, { css } from 'styled-components'
import theme from '@/styles/theme'

export const NavigationContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 290px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const NavigationSection = styled.div`
  position: relative;
  width: 100%;
`

export const NavigationIcon = styled.div`
  position: relative;
  height: 75px;
  width: 100px;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    height: 151.5px;
    width: 202px;
  }
`

export const NavigationOptions = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
`

export const NavigationOption = styled.div<{ selected: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 10px 20px;
  margin: 5px 0;

  cursor: pointer;

  background-color: ${({ selected }) => (selected ? theme.colors.backgroundOne : 'transparent')};
  border-radius: 10px;

  &:hover {
    background-color: ${theme.colors.backgroundOne};

    & p {
      font-family: ${theme.typography.base};
      font-weight: 600;
    }
  }

  & p {
    font-family: ${theme.typography.base};
    font-size: 18px;
    color: ${theme.colors.text};
    font-weight: ${({ selected }) => (selected ? '600' : '400')};
  }
`

export const NavigationOptionIcon = styled.div`
  position: relative;
  height: 24px;
  width: 24px;

  margin-right: 10px;
`

export const NavigationMobileBurgerContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 12;
`

export const NavigationMobileBurger = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  & i {
    background-color: black;
    width: 20px;
    height: 2px;
    margin: 2px;
    border-radius: 2px;
    transition: all ease 0.5s;

    ${({ open }) =>
      open
        ? css`
            padding-left: 25px;

            &:nth-child(1) {
              transform: rotate(45deg) translateY(8.5px);
            }

            &:nth-child(2) {
              opacity: 0;
            }

            &:nth-child(3) {
              transform: rotate(-45deg) translateY(-8.5px);
            }
          `
        : css`
            &:nth-child(1) {
              transform: rotate(0) translateY(0);
            }

            &:nth-child(2) {
              opacity: 1;
            }

            &:nth-child(3) {
              transform: rotate(0) translateY(0);
            }
          `}
  }
`

export const NavigationMobileContainer = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: 11;
  height: 100vh;
  width: 100vw;
  top: ${({ open }) => (open ? '0' : '-100vh')};
  transition: all 0.5s ease;

  background-color: ${theme.colors.backgroundOne};

  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`
