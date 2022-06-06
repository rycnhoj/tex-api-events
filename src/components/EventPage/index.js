import { Col, Row } from 'reactstrap'
import { third } from '../../util/colSizes'
import { convertDatabaseToDisplayDate } from '../../util/dateUtil'
import { transActivityCode, transBusCode, transClientCode, transCommType } from '../../util/translators'

const DynamicCol = ({ label, value }) =>
  (value && value !== '') ? <Col {...third}><strong>{label}:  </strong>{value}</Col> : null

const EventPage = ({ event }) => console.log(event) ||
  <div>
    <h1>Event Details</h1>
    <hr />
    <Row>
      <DynamicCol label='AccountNumber' value={event?.AccountNumber} />
      <DynamicCol label='ClientCode' value={transClientCode(event?.ClientCode)} />
      <DynamicCol label='BusinessSegment' value={transBusCode(event?.BusinessSegment)} />
    </Row>
    <hr />
    <Row>
      <DynamicCol label='IssueState' value={event?.IssueState} />
      <DynamicCol label='TitleNumber' value={event?.TitleNumber} />
      <DynamicCol label='TypeCode' value={event?.TypeCode} />
      <DynamicCol label='OwnerName' value={event?.OwnerName} />
      <DynamicCol label='CommunicationTypeCoden' value={transCommType(event?.CommunicationTypeCode)} />
      <DynamicCol label='UserId' value={event?.UserId} />
      <DynamicCol label='EventDate' value={convertDatabaseToDisplayDate(event?.EventDate)} />
      <DynamicCol label='EventType' value={event?.EventType?.split('Event')[0]} />
      <DynamicCol label='CommunicationNumber' value={event?.CommunicationNumber} />
      <DynamicCol label='FileName' value={event?.FileName} />
      <DynamicCol label='ContentType' value={event?.ContentType} />
      <DynamicCol label='DocumentId' value={event?.DocumentId} />
      <DynamicCol label='DocumentSubType' value={event?.DocumentSubType} />
      <DynamicCol label='ActivityCode' value={transActivityCode(event?.ActivityCode)} />
      <DynamicCol label='StatusCode' value={event?.StatusCode} />
      <DynamicCol label='VehicleYear' value={event?.VehicleYear} />
      <DynamicCol label='Comment' value={event?.Comment} />
      <DynamicCol label='Data' value={event?.Data} />
    </Row>
    <hr />
  </div>

export default EventPage
