import React from 'react';
import {
  Row,
  Card,
  CardBody,
  Input,
  // CardTitle,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  CustomInput,
  Button,
  // FormText,
  Form,
} from 'reactstrap';

import { injectIntl } from 'react-intl';

// import DatePicker from 'react-datepicker';
// import TagsInput from 'react-tagsinput';

import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

// import Select from 'react-select';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';

import IntlMessages from 'helpers/IntlMessages';
// import CustomSelectInput from 'components/common/CustomSelectInput';

// const selectData = [
//   { label: 'Cake', value: 'cake', key: 0 },
//   { label: 'Cupcake', value: 'cupcake', key: 1 },
//   { label: 'Dessert', value: 'dessert', key: 2 },
// ];

const Editcar = ({ match, 
  // intl 
}) => {
  // const [selectedOptionLO, setSelectedOptionLO] = useState('');
  // const [selectedOptionLT, setSelectedOptionLT] = useState('');
  // const [startDateLO, setStartDateLO] = useState(null);
  // const [startDateLT, setStartDateLT] = useState(null);
  // const [tagsLO, setTagsLO] = useState([]);
  // const [tagsLT, setTagsLT] = useState([]);

  // const { messages } = intl;

  return (
    <>
    <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.editcar" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="carname">
                        <IntlMessages id="cars.carname" />
                      </Label>
                      <Input 
                        type="text"
                        id="carname"
                        name="carname"
                        defaultValue="BMW"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="carbrand">
                        <IntlMessages id="cars.carbrand" />
                      </Label>
                      <Input
                        type="text"
                        name="carbrand"
                        id="carbrand"
                        defaultValue="BMW"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="carmodel">
                        <IntlMessages id="cars.carmodel" />
                      </Label>
                      <Input
                        type="text"
                        name="carmodel"
                        id="carmodel"
                        defaultValue="X4"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="cartype">
                        <IntlMessages id="cars.cartype" />
                      </Label>
                      <Input
                        type="text"
                        name="cartype"
                        id="cartype"
                        defaultValue="Sedan"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="seatingcapacity">
                        <IntlMessages id="cars.seating-capacity" />
                      </Label>
                      <Input
                        type="text"
                        name="seatingcapacity"
                        id="seatingcapacity"
                        defaultValue="5"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="platenumber">
                        <IntlMessages id="cars.plate-number" />
                      </Label>
                      <Input
                        type="text"
                        name="platenumber"
                        id="platenumber"
                        defaultValue="GJ-05-DR-1296"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="fueltype">
                        <IntlMessages id="cars.fuel-type" />
                      </Label>
                      <Input
                        type="text"
                        name="fueltype"
                        id="fueltype"
                        defaultValue="Patrol"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="fuelcapacity">
                        <IntlMessages id="cars.fuel-capacity" />
                      </Label>
                      <Input
                        type="text"
                        name="fuelcapacity"
                        id="fuelcapacity"
                        defaultValue="5 lit"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="yearofmanufacturing">
                        <IntlMessages id="cars.year-of-manufacturing" />
                      </Label>
                      <Input
                        type="text"
                        name="yearofmanufacturing"
                        id="yearofmanufacturing"
                        defaultValue="2018"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="carcolour">
                        <IntlMessages id="cars.car-colour" />
                      </Label>
                      <Input
                        type="text"
                        name="carcolour"
                        id="carcolour"
                        defaultValue="Matte Black"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="hourly-charge">
                        <IntlMessages id="cars.hourly-charge" />
                      </Label>
                      <Input
                        type="text"
                        name="hourly-charge"
                        id="hourly-charge"
                        defaultValue="5000 Rs"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="daily-charge">
                        <IntlMessages id="cars.daily-charge" />
                      </Label>
                      <Input
                        type="text"
                        name="daily-charge"
                        id="daily-charge"
                        defaultValue="15000"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="weekly-charge">
                        <IntlMessages id="cars.weekly-charge" />
                      </Label>
                      <Input
                        type="text"
                        name="weekly-charge"
                        id="weekly-charge"
                        defaultValue="36000"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="monthly-charge">
                        <IntlMessages id="cars.monthly-charge" />
                      </Label>
                      <Input
                        type="text"
                        name="monthly-charge"
                        id="monthly-charge"
                        defaultValue="95000"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="insurance-charge-per-day">
                        <IntlMessages id="cars.insurance-charge-per-day" />
                      </Label>
                      <Input
                        type="text"
                        name="insurance-charge-per-day"
                        id="insurance-charge-per-day"
                        defaultValue="1000"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="details">
                        <IntlMessages id="cars.details" />
                      </Label>
                      <Input
                        type="textarea"
                        name="details"
                        id="details"
                        defaultValue="One of the best car!!!"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <FormGroup>
                      <Label for="branch">
                        <IntlMessages id="cars.branch" />
                      </Label>
                      <Input
                        type="text"
                        name="branch"
                        id="branch"
                        defaultValue="Surat"
                      />
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <Label for="front-view-image">
                      <IntlMessages id="cars.front-view-image" />
                    </Label>
                    <FormGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                        <CustomInput
                          type="file"
                          id="exampleCustomFileBrowser1"
                          name="customFile"
                        />
                  </InputGroup>
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <Label for="rear-view-image">
                      <IntlMessages id="cars.rear-view-image" />
                    </Label>
                    <FormGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                        <CustomInput
                          type="file"
                          id="exampleCustomFileBrowser1"
                          name="customFile"
                        />
                  </InputGroup>
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <Label for="left-view-image">
                      <IntlMessages id="cars.left-view-image" />
                    </Label>
                    <FormGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                        <CustomInput
                          type="file"
                          id="exampleCustomFileBrowser1"
                          name="customFile"
                        />
                  </InputGroup>
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <Label for="right-view-image">
                      <IntlMessages id="cars.right-view-image" />
                    </Label>
                    <FormGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                        <CustomInput
                          type="file"
                          id="exampleCustomFileBrowser1"
                          name="customFile"
                        />
                  </InputGroup>
                    </FormGroup>
                  </Colxx>

                  <Colxx sm={6}>
                    <Label for="interior-view-image">
                      <IntlMessages id="cars.interior-view-image" />
                    </Label>
                    <FormGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">Upload</InputGroupAddon>
                        <CustomInput
                          type="file"
                          id="exampleCustomFileBrowser1"
                          name="customFile"
                        />
                  </InputGroup>
                    </FormGroup>
                  </Colxx>
                </FormGroup>

                <Button color="primary">
                  <IntlMessages id="forms.submit" />
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default injectIntl(Editcar);
