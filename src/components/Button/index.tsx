import { FC } from 'react'
import { ButtonContainer } from './style'

interface IProps {
  label: string
  handleClick: () => void
  isLoading: boolean
}

const Button: FC<IProps> = ({ label, handleClick, isLoading }) => {
  return (
    <ButtonContainer
      disabled={isLoading}
      onClick={() => {
        if (isLoading) {
          return
        } else {
          handleClick()
        }
      }}
    >
      {isLoading ? <p>Processing...</p> : <p>{label}</p>}
    </ButtonContainer>
  )
}

export default Button
