
import { startOfYesterday } from 'date-fns'
import tfsData from '../data/tfsData'
import { parseDatabaseDateTime } from './dateUtil'

const fetchDataFromFile = () => {
  const rawFile = new XMLHttpRequest() // eslint-disable-line
  let data

  rawFile.open('GET', tfsData, false)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        data = rawFile.responseText
      }
    }
  }
  rawFile.send(null)

  return data
}

const removeDups = events =>
  events.filter((value, index) => {
    const _value = JSON.stringify(value)
    return index === events.findIndex(obj => {
      return JSON.stringify(obj) === _value
    })
  })

const getEvents = () => {
  const data = fetchDataFromFile()
  const events = data.split('\n')
    .map(event => {
      if (event) {
        const { Data, ...rest } = JSON.parse(event)
        return rest
      }
      return null
    })
    .filter(event => event !== null)
    .filter(event => !['MINTERCI', 'DELGADAN', 'GUNTERKE', 'WEIZMAAD', 'GARRETMA', 'MCDONAR1'].includes(event.UserId))
    // .filter(event => parseDatabaseDateTime(event.EventDate) > startOfYesterday())
    // .filter(({ AccountNumber }) => AccountNumber === '010272VV958')
    .sort((a, b) => {
      const timeA = parseDatabaseDateTime(a.EventDate)
      const timeB = parseDatabaseDateTime(b.EventDate)
      if (timeA < timeB) return 1
      if (timeA > timeB) return -1
      return 0
    })
    .slice(0, 100)

  return removeDups(events)
}

export default getEvents
