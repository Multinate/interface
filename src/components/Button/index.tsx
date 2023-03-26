import Image from 'next/image'
import { FC } from 'react'
import { ButtonContainer, ButtonSpinner } from './style'
import LoaderIcon from '@/assets/images/icons/Loader.svg'

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
      {isLoading ? (
        <ButtonSpinner>
          <Image src={LoaderIcon} alt="Loader" fill />
        </ButtonSpinner>
      ) : (
        <p>{label}</p>
      )}
    </ButtonContainer>
  )
}

export default Button
