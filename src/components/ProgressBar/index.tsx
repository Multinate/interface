import { ProgressBarBase, ProgressBarContainer, ProgressBarFilled, ProgressBarText } from './style'
import CountUp from 'react-countup'
import { FC } from 'react'

interface IProps {
  currentValue: number
  maxValue: number
}

const ProgressBar: FC<IProps> = ({ currentValue, maxValue }) => {
  console.log(currentValue)
  console.log(maxValue)
  console.log((currentValue / maxValue) * 100)

  return (
    <ProgressBarContainer>
      <ProgressBarBase>
        <ProgressBarFilled
          rightEndCurved={currentValue / maxValue >= 1}
          toWidth={currentValue / maxValue >= 1 ? 100 : (currentValue / maxValue) * 100}
        />
      </ProgressBarBase>
      <ProgressBarText>
        $<CountUp start={0} end={currentValue} decimals={0} duration={2} /> /$
        {maxValue} raised!
      </ProgressBarText>
    </ProgressBarContainer>
  )
}

export default ProgressBar
