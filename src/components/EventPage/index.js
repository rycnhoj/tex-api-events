import { Col, Row } from 'reactstrap'
import { third } from '../../util/colSizes'
import { convertDatabaseToDisplayDate } from '../../util/dateUtil'
import { transActivityCode, transBusCode, transClientCode, transCommType } from '../../util/translators'
import ReactJson from 'react-json-view'

const DynamicCol = ({ label, value }) =>
  (value && value !== '') ? <Col {...third}><strong>{label}:  </strong>{value}</Col> : null

const transRoute = ({ CommunicationTypeCode }) => {
  switch (CommunicationTypeCode) {
    // case '':
    //   return 'Cancel'
    // case '':
    //   return 'Comments​/TitleMaintenance'
    // case '':
    //   return 'Comments​/TitleMaintenance​/{communicationNumber}'
    // case '':
    //   return 'Comments​/Account'
    case '31':
      return 'CustomerMove'
    // case '':
    //   return 'Duplicate'
    // case '':
    //   return 'FollowUpOverride'
    // case '':
    //   return 'LienSatisfaction​/Branch​/Lease'
    // case '':
    //   return 'LienSatisfaction​/Branch​/Retail'
    // case '':
    //   return 'LienSatisfaction​/Customer​/Lease'
    // case '':
    //   return 'LienSatisfaction​/Customer​/Lease​/International'
    // case '':
    //   return 'LienSatisfaction​/Customer​/Retail'
    // case '':
    //   return 'LienSatisfaction​/Customer​/Retail​/International'
    // case '':
    //   return 'LienSatisfaction​/Dealer​/Lease'
    // case '':
    //   return 'LienSatisfaction​/Dealer​/Retail'
    // case '':
    //   return 'LienSatisfaction​/Other​/Lease'
    // case '':
    //   return 'LienSatisfaction​/Other​/Lease​/International'
    // case '':
    //   return 'LienSatisfaction​/Other​/Retail'
    // case '':
    //   return 'LienSatisfaction​/Other​/Retail​/International'
    // case '':
    //   return 'NameChange'
    // case '':
    //   return 'PaidInFull​/Auction'
    // case '':
    //   return 'PaidInFull​/Branch​/Lease'
    // case '':
    //   return 'PaidInFull​/Branch​/Retail'
    // case '':
    //   return 'PaidInFull​/Customer​/Lease'
    // case '':
    //   return 'PaidInFull​/Customer​/Lease​/International'
    // case '':
    //   return 'PaidInFull​/Customer​/Retail'
    // case '':
    //   return 'PaidInFull​/Customer​/Retail​/International'
    // case '':
    //   return 'PaidInFull​/Dealer​/Lease'
    // case '':
    //   return 'PaidInFull​/Dealer​/Retail'
    // case '':
    //   return 'PaidInFull​/Other​/Lease'
    // case '':
    //   return 'PaidInFull​/Other​/Lease​/International'
    // case '':
    //   return 'PaidInFull​/Other​/Retail'
    // case '':
    //   return 'PaidInFull​/Other​/Retail​/International'
    // case '':
    //   return 'Repo'
    // case '':
    //   return 'Repo​/Redemption'
    // case '':
    //   return 'Repo​/Auction'
    // case '':
    //   return 'Search​/GetDealerBranches'
    // case '':
    //   return 'Search​/GetAuctionHouses'
    // case '':
    //   return 'Search​/{dealerName}​/{branchCode}'
    // case '':
    //   return 'Search​/GetAllStates'
    // case '':
    //   return 'Search​/{stateCode}'
    // case '':
    //   return 'Search​/{stateCode}​/{countyNumber}​/AuctionHouses'
    // case '':
    //   return 'Search​/account​/{accountNumber}'
    // case '':
    //   return 'Search​/account'
    // case '':
    //   return 'Ticket'
    // case '':
    //   return 'Ticket​/Update'
    // case '':
    //   return 'Ticket​/Close'
    // case '':
    //   return 'TransferOfEquity'
    default:
      return '
  }
}

const EventPage = ({ event }) =>
  <div>
    <h1>Event Details [{transRoute(event)}]</h1>
    <hr />
    <Row>
      <DynamicCol label='Account Number' value={event?.AccountNumber} />
      <DynamicCol label='Client Code' value={transClientCode(event?.ClientCode)} />
      <DynamicCol label='Business Segment' value={transBusCode(event?.BusinessSegment)} />
    </Row>
    <hr />
    <Row>
      <DynamicCol label='Issue State' value={event?.IssueState} />
      <DynamicCol label='Title Number' value={event?.TitleNumber} />
      <DynamicCol label='Type Code' value={event?.TypeCode} />
      <DynamicCol label='Owner Name' value={event?.OwnerName} />
      <DynamicCol label='Comm Type Code' value={transCommType(event?.CommunicationTypeCode)} />
      <DynamicCol label='User Id' value={event?.UserId} />
      <DynamicCol label='Event Date' value={convertDatabaseToDisplayDate(event?.EventDate)} />
      <DynamicCol label='Event Type' value={event?.EventType?.split('Event')[0]} />
      <DynamicCol label='Comm Number' value={event?.CommunicationNumber} />
      <DynamicCol label='File Name' value={event?.FileName} />
      <DynamicCol label='Content Type' value={event?.ContentType} />
      <DynamicCol label='Doc Id' value={event?.DocumentId} />
      <DynamicCol label='Doc Sub Type' value={event?.DocumentSubType} />
      <DynamicCol label='Activity Code' value={transActivityCode(event?.ActivityCode)} />
      <DynamicCol label='Status Code' value={event?.StatusCode} />
      <DynamicCol label='Vehicle Year' value={event?.VehicleYear} />
      <DynamicCol label='Comment' value={event?.Comment} />
      <DynamicCol label='Data' value={event?.Data} />
    </Row>
    <hr />
    <Row>
      <ReactJson src={event} />
    </Row>
  </div>

export default EventPage
