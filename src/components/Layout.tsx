import theme from "@/styles/theme";
import styled from "styled-components";
import Meta from "./Meta";
import Navigation from "./Navigation";

const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const LayoutContent = styled.div`
  position: relative;
  width: calc(100vw - 350px);
  min-height: 100vh;
  padding: 40px;

  background: ${theme.colors.backgroundOne};
`

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Meta/>
      <LayoutContainer>
      <Navigation />
      <LayoutContent>
        {children}
      </LayoutContent>
    </LayoutContainer>
    </>
   
  );
};

export default Layout;
