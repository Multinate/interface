import { FC, useState } from 'react'
import { TextFieldContainer, TextFieldInput, TextFieldLabel } from './style'

interface IProps {
  label: string
  type: string
}

const TextField: FC<IProps> = ({ label, type }) => {
  const [text, setText] = useState<string>('')
  const [focus, setFocus] = useState<boolean>(false)

  const handleChangeText = (e: string) => {
    setText(e)
  }

  return (
    <TextFieldContainer>
      <TextFieldInput
        type={type}
        value={text}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => handleChangeText(e.target.value)}
      ></TextFieldInput>
      <TextFieldLabel isText={text.length > 0} isFocus={focus}>
        {label}
      </TextFieldLabel>
    </TextFieldContainer>
  )
}

export default TextField
