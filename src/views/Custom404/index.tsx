import { Custom404ViewContainer, Custom404ViewDescription, Custom404ViewTitle } from './style'

const Custom404View = () => {
  return (
    <Custom404ViewContainer>
      <Custom404ViewTitle>Page not found!</Custom404ViewTitle>
      <Custom404ViewDescription>This page does not exist. Please navigate with the sidebar.</Custom404ViewDescription>
    </Custom404ViewContainer>
  )
}

export default Custom404View
