import React, { Fragment } from 'react'

const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
}

const TimeForHumans = ({ date }) => {
  const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000

  const getUnitAndValueDate = (elapsedTime) => {
    for (const [unit, unitValue] of Object.entries(DATE_UNITS)) {
      if (elapsedTime > unitValue || unit === 'second') {
        const value = Math.floor(elapsedTime / unitValue) * -1
        return { value, unit }
      }
    }
  }

  const getTimeAgo = () => {
    const timestamp = new Date(date).getTime()
    const rtf = new Intl.RelativeTimeFormat('en')
    const elapsedTime = getSecondsDiff(timestamp)
    const { value, unit } = getUnitAndValueDate(elapsedTime)

    return rtf.format(value, unit)
  }

  return <Fragment>{getTimeAgo()}</Fragment>
}

export default TimeForHumans
