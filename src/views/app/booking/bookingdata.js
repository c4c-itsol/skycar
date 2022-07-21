import React from "react";
import { NavLink } from "react-router-dom";

const bookingData = [
    {
        Customer_Name: 'Dhruti Rathod',
        Booking_on: '01.04.2022 - 09:00 PM',
        Booking_From: '02.04.2022 - 09:00 AM',
        Booking_To: '04.04.2022 - 06:00 PM',
        Car_Name: 'BMW',
        Car_Type: 'SUV',
        Booking_Status: 'Completed',
        Remark: '',
        Total_Charges: 96000,
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
        Customer_Name: 'Deep Rathod',
        Booking_on: '31.05.2022 - 06:00 PM',
        Booking_From: '02.06.2022 - 06:00 AM',
        Booking_To: '05.06.2022 - 09:00 PM',
        Car_Name: 'MG',
        Car_Type: 'SUV',
        Booking_Status: 'In Process',
        Remark: '',
        Total_Charges: 30000,
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
      Customer_Name: 'Minaxi Rathod',
      Booking_on: '10.04.2022 - 05:00 PM',
      Booking_From: '12.04.2022 - 09:00 AM',
      Booking_To: '14.04.2022 - 09:00 PM',
      Car_Name: 'Skoda',
      Car_Type: 'Sedan',
      Booking_Status: 'Pending',
      Remark: '',
      Total_Charges: 26000,
      Action :(
        <div className="table-action-wrap"> 
          {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
          {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
          <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
        </div>
      )
    },
    {
        Customer_Name: 'Hansraj Rathod',
        Booking_on: '01.11.2022 - 09:00 PM',
        Booking_From: '18.11.2022 - 07:00 AM',
        Booking_To: '21.11.2022 - 10:00 PM',
        Car_Name: 'MG',
        Car_Type: 'SUV',
        Booking_Status: 'Completed',
        Remark: '',
        Total_Charges: 35000,
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
      },
      {
        Customer_Name: 'Dhruti Rathod',
        Booking_on: '01.04.2022 - 09:00 PM',
        Booking_From: '02.04.2022 - 09:00 AM',
        Booking_To: '04.04.2022 - 06:00 PM',
        Car_Name: 'BMW',
        Car_Type: 'SUV',
        Booking_Status: 'Completed',
        Remark: '',
        Total_Charges: 96000,
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
        Customer_Name: 'Deep Rathod',
        Booking_on: '31.05.2022 - 06:00 PM',
        Booking_From: '02.06.2022 - 06:00 AM',
        Booking_To: '05.06.2022 - 09:00 PM',
        Car_Name: 'MG',
        Car_Type: 'SUV',
        Booking_Status: 'In Completed',
        Remark: '',
        Total_Charges: 30000,
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
      Customer_Name: 'Minaxi Rathod',
      Booking_on: '10.04.2022 - 05:00 PM',
      Booking_From: '12.04.2022 - 09:00 AM',
      Booking_To: '14.04.2022 - 09:00 PM',
      Car_Name: 'Skoda',
      Car_Type: 'Sedan',
      Booking_Status: 'Pending',
      Remark: '',
      Total_Charges: 26000,
      Action :(
        <div className="table-action-wrap"> 
          {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
          {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
          <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
        </div>
      )
    },
    {
        Customer_Name: 'Hansraj Rathod',
        Booking_on: '01.11.2022 - 09:00 PM',
        Booking_From: '18.11.2022 - 07:00 AM',
        Booking_To: '21.11.2022 - 10:00 PM',
        Car_Name: 'MG',
        Car_Type: 'SUV',
        Booking_Status: 'Completed',
        Remark: '',
        Total_Charges: 35000,
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
      },
  ];
  
  export default bookingData;
  