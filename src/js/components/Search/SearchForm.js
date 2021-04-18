import React, { useState } from "react";
import { Redirect } from 'react-router';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  const [vehiclePrice, setVehiclePrice] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [financeOption, setFinanceOption] = useState(1); 
  const [validDepositAmount, setValidDepositAmount] = useState(""); 

  const [vehiclePriceError, setVehiclePriceError] = useState({});
  const [depositAmountError, setDepositAmountError] = useState({});

  const [redirect, setRedirect] = useState(false);

  const onSubmit = (e) => {
    const isValid = formValidation();
    if(isValid){
      setRedirect(true);
    }
    e.preventDefault();
  }

  const formValidation = () => {
    const vehiclePriceError = {};
    const depositAmountError = {};
    let isValid = true;

    let validDepositAmount = Math.round((vehiclePrice / 100) * 15  )
    setValidDepositAmount(validDepositAmount);
    
    if(vehiclePrice.trim().length < 1){
      vehiclePriceError.vehiclePriceShort = "Please enter a Vehicle Price"
      isValid = false;
    }

    if(depositAmount.trim().length === 0){
      depositAmountError.depositAmountShort = "Please enter a Deposit Amount"
      isValid = false;
    }

    if(depositAmount < validDepositAmount && depositAmount.length !== 0 ){
      depositAmountError.depositAmountIncorrect = "Your deposit must be "
      isValid = false;
    }

    setVehiclePriceError(vehiclePriceError);
    setDepositAmountError(depositAmountError);

    return isValid;

  }

  let radioItems = [
    { id: 1, name:'One Year' },
    { id: 2, name:'Two Year' },
    { id: 3, name:'Three Year'},
];

if (redirect)
            return <Redirect push to={{ 
              pathname: '/searchresults', 
              state: {
                vehiclePrice: {vehiclePrice}, 
                depositAmount: {depositAmount}, 
                deliveryDate: {deliveryDate}, 
                financeOption: {financeOption}
              }}
              }
             />

  return (
      <form className="search-form" onSubmit={onSubmit}>
        <label className="search-form__label">
          Vehicle Price :
          <input type="number" name="name" placeholder="2000" value={vehiclePrice} onChange={(e) => {setVehiclePrice(e.target.value)}}/>
          {Object.keys(vehiclePriceError).map((key) => {
            return <div style={{color : "red"}}>{vehiclePriceError[key]}</div>
          })}
        </label>
        <label className="search-form__label">
          Deposit Amount (This must be at least 15% of the vehicle price) :
          <input type="number" name="name" placeholder="200" value={depositAmount} onChange={(e) => {setDepositAmount(e.target.value)}}/>
          {Object.keys(depositAmountError).map((key) => {
            return <div style={{color : "red"}}>{depositAmountError[key]} {depositAmount < 1 ? null : 'greater than 15% of the vehicle price ( £' + validDepositAmount + " )" }</div>
          })}
        </label>
        <label className="search-form__label">
          Delivery Date :
          <DatePicker
            selected={deliveryDate}
            value={deliveryDate}
            onChange={(date) => {setDeliveryDate(date)}}
          />
        </label >
        <label className="search-form__radio">
          Finance Options :
          <div>
          {radioItems.map(RadioItem => (
            <label className="container" key={RadioItem.id}>{RadioItem.name}
            <input  type="radio" value={RadioItem.id} name="finance" defaultChecked={RadioItem.id === 1} onChange={(e) => {setFinanceOption(e.target.value)}} />
            <span className="checkmark"></span>
            </label>
        )  )}        </div>
        </label>
        <button type="submit" className="button--primary">Search</button>
      </form>
  );
  };



export default SearchForm;
