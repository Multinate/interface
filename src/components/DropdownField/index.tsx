import useOutsideClick from '@/hooks/useOutsideClick'
import { IOption } from '@/utils/interfaces'
import { FC, useState } from 'react'
import {
  DropdownFieldContainer,
  DropdownFieldInput,
  DropdownFieldInputContainer,
  DropdownFieldOptionSelections,
  DropdownFieldOption,
  DropdownFieldLabel,
} from './style'

interface IProps {
  label: string
  options: IOption[]
  activeSelection: IOption
  handleSelection: (selected: IOption) => void
}

const DropdownField: FC<IProps> = ({ label, options, activeSelection, handleSelection }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const outerRef = useOutsideClick(() => setShowOptions(false))

  return (
    <DropdownFieldContainer ref={outerRef}>
      <DropdownFieldInputContainer show={showOptions}>
        <DropdownFieldLabel show={showOptions}>{label}</DropdownFieldLabel>
        <DropdownFieldInput show={showOptions} onClick={() => setShowOptions(!showOptions)}>
          <p>{activeSelection.label}</p>
          <span>
            <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L8.5 8.5L16 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </DropdownFieldInput>
        <DropdownFieldOptionSelections show={showOptions}>
          {options.map((option) => (
            <DropdownFieldOption
              key={option.label}
              onClick={() => {
                setShowOptions(false)
                handleSelection(option)
              }}
            >
              <p>{option.label}</p>
            </DropdownFieldOption>
          ))}
        </DropdownFieldOptionSelections>
      </DropdownFieldInputContainer>
    </DropdownFieldContainer>
  )
}

export default DropdownField
