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

const Addcar = ({ match, intl }) => {
  // const [selectedOptionLO, setSelectedOptionLO] = useState('');
  // const [selectedOptionLT, setSelectedOptionLT] = useState('');
  // const [startDateLO, setStartDateLO] = useState(null);
  // const [startDateLT, setStartDateLT] = useState(null);
  // const [tagsLO, setTagsLO] = useState([]);
  // const [tagsLT, setTagsLT] = useState([]);

  const { messages } = intl;

  return (
    <>
    <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="cars.title" match={match} />
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
                        name="carname"
                        id="carname"
                        placeholder={messages['cars.carname']}
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
                        placeholder={messages['cars.carbrand']}
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
                        placeholder={messages['cars.carmodel']}
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
                        placeholder={messages['cars.cartype']}
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
                        placeholder={messages['cars.seating-capacity']}
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
                        placeholder={messages['cars.plate-number']}
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
                        placeholder={messages['cars.fuel-type']}
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
                        placeholder={messages['cars.fuel-capacity']}
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
                        placeholder={messages['cars.year-of-manufacturing']}
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
                        placeholder={messages['cars.car-colour']}
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
                        placeholder={messages['cars.hourly-charge']}
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
                        placeholder={messages['cars.daily-charge']}
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
                        placeholder={messages['cars.weekly-charge']}
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
                        placeholder={messages['cars.monthly-charge']}
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
                        placeholder={messages['cars.insurance-charge-per-day']}
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
                        placeholder={messages['cars.details']}
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
                        placeholder={messages['cars.branch']}
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

export default injectIntl(Addcar);
