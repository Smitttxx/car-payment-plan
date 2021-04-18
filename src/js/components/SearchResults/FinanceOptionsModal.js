import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import FinancePaymentTable from "./FinancePaymentTable";

const FinanceOptionsModal = (props) => {
  const { state } = useLocation();
  
  const vehiclePrice = props.carPrice;
  const depositAmount = state.depositAmount.depositAmount;
  const deliveryDate = state.deliveryDate.deliveryDate
    .toGMTString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
  const financeOption = state.financeOption.financeOption;
  let arrangementFee = 88;
  let completionFee = 20;
  let numberOfPayments = 12;
  let loanAmount = 0;
  let monthlyPayment = 0;
  let firstPayment = 0;
  let lastPayment= 0; 
  let averagePayments = 0;
  let totalLoanAmountIncludingCharges = 0;   
  
  if (financeOption === "1") {
      numberOfPayments = 12;
    }
    if (financeOption === "2") {
        numberOfPayments = 24;
    }
    if (financeOption === "3") {
        numberOfPayments = 36;
    }
    
    const calculatePayments = () => {
        loanAmount =  Math.round(((vehiclePrice - depositAmount) + Number.EPSILON) * 100) / 100;
        monthlyPayment = Math.round(((loanAmount / numberOfPayments) + Number.EPSILON) * 100) / 100;
        firstPayment = Math.round(((monthlyPayment + arrangementFee) + Number.EPSILON) * 100) / 100;
        lastPayment = Math.round(((monthlyPayment + completionFee) + Number.EPSILON) * 100) / 100;
        averagePayments = numberOfPayments - 2;
        totalLoanAmountIncludingCharges = ((monthlyPayment * averagePayments) + firstPayment + lastPayment).toFixed(0); 
    };

  calculatePayments();

  return (
    <Fragment>
      <h2 className="finance-info__title">Finance info </h2>
          <div className="finance-info">
              <div className="finance-info__item"><span>Total car price: </span><span> £{vehiclePrice}</span></div>
              <div className="finance-info__item"><span>Deposit Amount: </span><span> £{depositAmount}</span></div>
              <div className="finance-info__item"><span>Loan ammount after deposit is paid: </span><span> £{loanAmount}</span></div>
              <div className="finance-info__item"><span>Number of payments: </span><span> {numberOfPayments}</span></div>
              <div className="finance-info__item"><span>Average Monthly payment: </span><span> £{monthlyPayment}</span></div>
              <div className="finance-info__item"><span>First Payment (Including £{arrangementFee} arrangement fee): </span><span>£{firstPayment} </span></div>
              <div className="finance-info__item"><span>Last Payment (Including £{completionFee} completion fee): </span><span>£{lastPayment}</span></div>
              <div className="finance-info__item"><span>Total Loan Amount Including Charges: </span><span>£{totalLoanAmountIncludingCharges}</span></div>
              </div>
      <FinancePaymentTable totalLoanAmountIncludingCharges={totalLoanAmountIncludingCharges}  firstPayment={firstPayment} lastPayment={lastPayment} averagePayments={averagePayments} monthlyPayment={monthlyPayment} deliveryDate={deliveryDate}/>
    <div> </div>

    </Fragment>
  );
};

FinanceOptionsModal.propTypes = {
  carPrice: PropTypes.number.isRequired,
};

export default FinanceOptionsModal;
