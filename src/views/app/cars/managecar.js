import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import CarTable from './cartable'



const ManageCars = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="manage-cars.title" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4"> 
        <CarTable/>
        </Colxx>
      </Row>
    </>
  );
};

export default ManageCars;
