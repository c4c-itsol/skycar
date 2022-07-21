import React from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import BookingTable from './bookingtable'

const ManageBooking = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="manage-booking.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <BookingTable/>
          </p>
        </Colxx>
      </Row>
    </>
  );
};

export default ManageBooking;
