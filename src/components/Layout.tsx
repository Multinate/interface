import theme from '@/styles/theme'
import styled from 'styled-components'
import Meta from './Meta'
import Navigation from './Navigation'

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100vw;
`

const LayoutContent = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px;

  background: ${theme.colors.backgroundOne};

  @media screen and (min-width: ${theme.breakpoints.large}) {
    padding: 40px;
  }
`

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Meta />
      <LayoutContainer>
        <Navigation />
        <LayoutContent>{children}</LayoutContent>
      </LayoutContainer>
    </>
  )
}

export default Layout
