import React from "react";
import { NavLink } from "react-router-dom";
// // import { adminRoot } from './defaultValues';
// import { adminRoot } from '../../../constants/defaultValues';


const produtcs = [
    {
      Car_Name: 'BMW',
      Brand: 'BMW',
      Model: 'X4',
      Type: 'Cakes',
      Seating_Capacity: '02.04.2018',
      Plate_Number: 'ON HOLD',
      Car_Status: 'primary',
      Fuel_Type: 1647,
      Fuel_Capacity: '5 lit',
      Year_Of_Manuacturing: 62,
      Colour : 'Matte Black',
      Hourly_Charge : '50 Rs',
      Daily_Charge : '150 Rs',
      Weekly_Charge : '500 Rs',
      Monthly_Charge : '2050 Rs',
      Action :(
        <div className="table-action-wrap"> 
          <NavLink to = 'editcar'><i className="simple-icon-pencil icns "/></NavLink>
          {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
          <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
        </div>
      )
    },
    {
      Car_Name: 'BMW',
      Brand: 'BMW',
      Model: 'Z4',
      Type: 'Cakes',
      Seating_Capacity: '02.04.2018',
      Plate_Number: 'ON HOLD',
      Car_Status: 'primary',
      Fuel_Type: 1647,
      Fuel_Capacity: '5 lit',
      Year_Of_Manuacturing: 62,
      Colour : 'Matte Black',
      Hourly_Charge : '50 Rs',
      Daily_Charge : '150 Rs',
      Weekly_Charge : '500 Rs',
      Monthly_Charge : '2050 Rs',
      Action :(
        <div className="table-action-wrap"> 
          <NavLink to = 'editcar'><i className="simple-icon-pencil icns "/></NavLink>
          {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
          <NavLink to><i className="simple-icon-trash icns dlticn"/></NavLink>
        </div>
      )
    },
    {
      Car_Name: 'BMW',
      Brand: 'BMW',
      Model: 'X4',
      Type: 'sedan',
      Seating_Capacity: '02.04.2018',
      Plate_Number: 'ON HOLD',
      Car_Status: 'primary',
      Fuel_Type: 1647,
      Fuel_Capacity: '5 lit',
      Year_Of_Manuacturing: 62,
      Colour : 'Matte Black',
      Hourly_Charge : '50 Rs',
      Daily_Charge : '150 Rs',
      Weekly_Charge : '500 Rs',
      Monthly_Charge : '2050 Rs',
      Action :(
        <div className="table-action-wrap"> 
          <NavLink to = 'editcar'><i className="simple-icon-pencil icns "/></NavLink>
          {/* <NavLink to><i className="simple-icon-doc icns"/></NavLink> */}
          <NavLink to><i className="simple-icon-trash icns dlticn "/></NavLink>
        </div>
      )
    },
  ];
  
  export default produtcs;
  