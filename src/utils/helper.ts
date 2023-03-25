const getTime = (timestamp: number) => {
  if (timestamp < 0 || timestamp === Infinity) return [0, 0, 0, 0]

  const days = Math.floor(timestamp / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timestamp % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}

export const getTimeFormat = (timestamp: number, from?: 'past' | 'future' | 'present') => {
  let _timestamp = timestamp
  if (timestamp >= 1_000_000_000_000) {
    _timestamp = timestamp / 1000
  }

  const [_day, _hours, _minutes, _seconds] =
    from === 'past'
      ? getTime(new Date().getTime() - _timestamp * 1000)
      : from === 'future'
      ? getTime(_timestamp * 1000 - new Date().getTime())
      : getTime(_timestamp * 1000)

  if (_day > 0) {
    return `${_day} day${_day > 2 ? `s` : ``}`
  }

  if (_hours > 0) {
    return `${_hours} hour${_hours > 2 ? `s` : ``}`
  }

  if (_minutes > 0) {
    return `${_minutes} minute${_minutes > 2 ? `s` : ``}`
  }

  if (_seconds > 0) {
    return `${_seconds} second${_seconds > 2 ? `s` : ``}`
  }

  return `now`
}
