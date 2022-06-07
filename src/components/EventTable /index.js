import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { sixth, twelfth } from '../../util/colSizes'
import { convertDatabaseToDisplayDate } from '../../util/dateUtil'
import getEvents from '../../util/getEvents'
import useInterval from '../../util/useInterval'
import EventPage from '../EventPage'
import './index.scss'

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)

const buildKey = event => {
  return event?.AccountNumber +
    '' + event?.ActivityCode +
    '' + event?.BusinessSegment +
    '' + event?.ClientCode +
    '' + event?.CommunicationNumber +
    '' + event?.CommunicationTypeCode +
    '' + event?.EventDate +
    '' + event?.EventType +
    '' + event?.UserId
}

const EventColumn = ({ col, name, value, isHeader }) =>
  <Col {...col}>
    <span>{isHeader ? name : value}</span>
  </Col>

const EventRow = ({ event, isHeader, eventDetails, setEventDetails }) => {
  let className = isHeader ? 'event-header-row' : 'event-row'

  className += isEqual(eventDetails, event) ? ' selected' : ''

  return (
    <Row className={className + ' no-select'} onClick={() => setEventDetails(event)}>
      <EventColumn col={sixth} name='EventDate (UTC)' value={convertDatabaseToDisplayDate(event?.EventDate)} isHeader={isHeader} />
      <EventColumn col={sixth} name='EventType' value={event?.EventType} isHeader={isHeader} />
      <EventColumn col={twelfth} name='Client' value={event?.ClientCode} isHeader={isHeader} />
      <EventColumn col={sixth} name='AccountNumber' value={event?.AccountNumber} isHeader={isHeader} />
      <EventColumn col={twelfth} name='UserId' value={event?.UserId} isHeader={isHeader} />
      <EventColumn col={twelfth} name='BusCode' value={event?.BusinessSegment} isHeader={isHeader} />
      <EventColumn col={twelfth} name='Activity' value={event?.ActivityCode} isHeader={isHeader} />
      <EventColumn col={twelfth} name='CommType' value={event?.CommunicationTypeCode} isHeader={isHeader} />
    </Row>
  )
}

const EventTable = () => {
  const [events, setEvents] = useState([])
  const [eventDetails, setEventDetails] = useState('')

  useInterval(async () => {
    const newEvents = await getEvents()
    setEvents(newEvents)
  }, 5000)

  return (
    <div className='events'>
      <div className='event-details px-5 py-5'>
        {eventDetails ? <EventPage event={eventDetails} /> : null}
      </div>
      <div className='event-table px-5 py-5'>
        <EventRow data={{}} isHeader />
        {
          events.map(event =>
            <EventRow
              key={buildKey(event)}
              event={event}
              eventDetails={eventDetails}
              setEventDetails={setEventDetails}
              isHeader={false}
            />
          )
        }
      </div>
    </div>
  )
}

export default EventTable
