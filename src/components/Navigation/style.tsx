import styled from 'styled-components'
import theme from '@/styles/theme'

export const NavigationContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 252px;

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
  height: 50px;
  width: 202px;
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
