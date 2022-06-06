import { AmiableForm } from 'amiable-forms'
import React from 'react'
import { Container } from 'reactstrap'
import EventTable from '../EventTable '
import './index.scss'

const App = () =>
  <Container fluid>
    <AmiableForm>
      <EventTable />
    </AmiableForm>
  </Container>

export default App
