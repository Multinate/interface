import theme from '@/styles/theme'
import styled from 'styled-components'

export const HomeViewContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  max-width: 750px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeViewTitle = styled.h2`
  position: relative;
  width: 100%;
  font-family: ${theme.typography.base};
  color: ${theme.colors.title};
  font-size: 24px;

  margin-bottom: 20px;

  text-align: left;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 48px;
  }
`

export const HomeViewDescription = styled.p`
  position: relative;
  width: 100%;
  font-family: ${theme.typography.base};
  color: ${theme.colors.text};
  font-size: 14px;

  margin-bottom: 20px;

  text-align: left;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 18px;
  }
`

export const HomeViewSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const HomeViewSubtitle = styled.h3`
  position: relative;
  width: 100%;
  font-family: ${theme.typography.base};
  color: ${theme.colors.title};
  font-size: 16px;

  margin: 5px 0;

  text-align: left;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    font-size: 24px;
  }
`

export const HomeViewPoints = styled.ul`
  list-style-position: outside;
  padding-left: 15px;

  @media screen and (min-width: ${theme.breakpoints.xlarge}) {
    padding-left: 20px;
  }

  & li {
    position: relative;
    width: 100%;
    font-family: ${theme.typography.base};
    color: ${theme.colors.text};
    font-size: 14px;

    margin: 5px 0;

    text-align: left;

    @media screen and (min-width: ${theme.breakpoints.xlarge}) {
      font-size: 18px;
    }
  }
`
