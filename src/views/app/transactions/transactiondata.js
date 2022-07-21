import React from "react";
import { NavLink } from "react-router-dom";

const CustomerData = [
    {
        Transaction_Id:'Dhruti_12',
        Customer_Name: 'Dhruti Rathod',
        Payment_Date: '01.04.2022 - 09:00 PM',
        Payment_Type: 'Credit Card',
        Amount: '96000',
        Status: 'Payment Completed',
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
        Transaction_Id:'Deep_20',
        Customer_Name: 'Deep Rathod',
        Payment_Date: '31.05.2022 - 06:00 PM',
        Payment_Type: 'Credit Card',
        Amount: '30000',
        Status: 'Payment is in Process',
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
        Transaction_Id:'Minaxi_25',
        Customer_Name: 'Minaxi Rathod',
        Payment_Date: '01.04.2022 - 09:00 PM',
        Payment_Type: 'Net Banking',
        Amount: '96000',
        Status: 'Payment Completed',
        Action :(
        <div className="table-action-wrap"> 
          {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
          {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
          <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
        </div>
      )
    },
    {
        Transaction_Id:'Hansraj_19',
        Customer_Name: 'Hansraj Rathod',
        Payment_Date: '01.04.2022 - 09:00 PM',
        Payment_Type: 'Debit Card',
        Amount: '96000',
        Status: 'Payment Completed',
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
      },
      {
        Transaction_Id:'Dhruti_12',
        Customer_Name: 'Dhruti Rathod',
        Payment_Date: '01.04.2022 - 09:00 PM',
        Payment_Type: 'Credit Card',
        Amount: '96000',
        Status: 'Payment Completed',
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
        Transaction_Id:'Deep_20',
        Customer_Name: 'Deep Rathod',
        Payment_Date: '31.05.2022 - 06:00 PM',
        Payment_Type: 'Credit Card',
        Amount: '30000',
        Status: 'Payment is in Process',
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
    },
    {
        Transaction_Id:'Minaxi_25',
        Customer_Name: 'Minaxi Rathod',
        Payment_Date: '01.04.2022 - 09:00 PM',
        Payment_Type: 'Net Banking',
        Amount: '96000',
        Status: 'Payment Completed',
        Action :(
        <div className="table-action-wrap"> 
          {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
          {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
          <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
        </div>
      )
    },
    {
        Transaction_Id:'Hansraj_19',
        Customer_Name: 'Hansraj Rathod',
        Payment_Date: '01.04.2022 - 09:00 PM',
        Payment_Type: 'Debit Card',
        Amount: '96000',
        Status: 'Payment Completed',
        Action :(
          <div className="table-action-wrap"> 
            {/* <NavLink to><i className="simple-icon-pencil icns"/></NavLink> */}
            {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
            <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
          </div>
        )
      },
  ];
  
  export default CustomerData;
  