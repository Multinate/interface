import { BarChartContainer } from './style'
import { ResponsiveContainer, BarChart, XAxis, Bar } from 'recharts'
import useWindowDimensions from '@/hooks/useWindowDImensions'
import theme from '@/styles/theme'
import { FC } from 'react'

interface IProps {
  yes: number
  no: number
}

interface IDatapoint {
  label: string
  quantity: number
}

const CustomBarChart: FC<IProps> = ({ yes, no }) => {
  const { windowDimensions, LARGE_SCREEN_SIZE } = useWindowDimensions()

  const processData = (): IDatapoint[] => {
    return [
      {
        label: 'Agreed',
        quantity: yes,
      },
      {
        label: 'Disagreed',
        quantity: no,
      },
    ]
  }

  return (
    <BarChartContainer>
      <ResponsiveContainer width="100%" height={windowDimensions.width < LARGE_SCREEN_SIZE ? 156 : 170}>
        <BarChart data={processData()}>
          <XAxis dataKey="label" />
          <Bar
            label={{ fill: theme.colors.backgroundTwo, fontSize: 20 }}
            dataKey="quantity"
            fill={theme.colors.title}
          />
        </BarChart>
      </ResponsiveContainer>
    </BarChartContainer>
  )
}

export default CustomBarChart
