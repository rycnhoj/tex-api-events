import { format, isValid, parse } from 'date-fns'

const FORMAT_DATABASE_DATETIME = "yyyy-MM-dd'T'HH:mm:ss.SSSSSSSXXX"
export const FORMAT_DISPLAY_DATETIME = 'MM/dd/yyyy h:mm a'

const getLocalDate = date => {
  const newDate = new Date(Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ))

  newDate.setHours(newDate.getHours() + 4)

  return newDate
}

const formatDisplayDateTime = dateObj => {
  if (typeof dateObj === 'string') throw new Error('Input is a string, expected a Date Object')
  return isValid(dateObj) ? format(dateObj, FORMAT_DISPLAY_DATETIME) : ''
}

export const parseDatabaseDateTime = dateString => {
  if (!dateString) return undefined
  if (typeof dateString !== 'string') throw new Error('Input is not a string')
  const date = parse(dateString, FORMAT_DATABASE_DATETIME, new Date(0))
  return isValid(date) ? getLocalDate(date) : undefined
}

export const convertDatabaseToDisplayDate = dateString => formatDisplayDateTime(parseDatabaseDateTime(dateString))
