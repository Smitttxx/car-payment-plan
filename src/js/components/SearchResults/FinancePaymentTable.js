import React, { Fragment } from "react";
import PropTypes from "prop-types";


const FinancePaymentTable = (props) => {
  const totalLoanAmountIncludingCharges = props.totalLoanAmountIncludingCharges;
  const firstPayment = props.firstPayment;
  const lastPayment = props.lastPayment;
  const deliveryDate = props.deliveryDate;
  const monthlyPayment = props.monthlyPayment;
  const averagePayments = props.averagePayments + 2;
  let counter;
  let monthlyUpdateAmount = totalLoanAmountIncludingCharges;
  let paymentPlan = [];

  for (counter = 0; counter < averagePayments; counter++) {
    if (counter === 0) {
      let monthlyPaymentPlan = {};
      monthlyUpdateAmount =
        Math.round(
          (monthlyUpdateAmount - firstPayment + Number.EPSILON) * 100
        ) / 100;
      let date = new Date(deliveryDate);
      let firstDay = new Date(
        date.getFullYear(),
        date.getMonth() + counter + 1,
        1
      )
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      monthlyPaymentPlan.date = firstDay;
      monthlyPaymentPlan.amountDue = monthlyUpdateAmount;
      monthlyPaymentPlan.payment = firstPayment;
      paymentPlan.push(monthlyPaymentPlan);
    } else if (counter === averagePayments - 1) {
      let monthlyPaymentPlan = {};
      monthlyUpdateAmount =
        Math.round((monthlyUpdateAmount - lastPayment + Number.EPSILON) * 100) /
        100;
      let date = new Date(deliveryDate);
      let firstDay = new Date(
        date.getFullYear(),
        date.getMonth() + counter + 1,
        1
      )
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      monthlyPaymentPlan.date = firstDay;
      monthlyPaymentPlan.amountDue = monthlyUpdateAmount;
      monthlyPaymentPlan.payment = lastPayment;
      paymentPlan.push(monthlyPaymentPlan);
    } else {
      let monthlyPaymentPlan = {};
      monthlyUpdateAmount =
        Math.round(
          (monthlyUpdateAmount - monthlyPayment + Number.EPSILON) * 100
        ) / 100;
      let date = new Date(deliveryDate);
      let firstDay = new Date(
        date.getFullYear(),
        date.getMonth() + counter + 1,
        1
      )
        .toString()
        .split(" ")
        .slice(0, 4)
        .join(" ");
      monthlyPaymentPlan.date = firstDay;
      monthlyPaymentPlan.amountDue = monthlyUpdateAmount;
      monthlyPaymentPlan.payment = monthlyPayment;
      paymentPlan.push(monthlyPaymentPlan);
    }
  }

  return (
    <Fragment>
      <div>
        <h2>Payment schedule</h2>
          <div className="finance-table">
          <span>Payment Date</span>
          <span>Monthly Payment</span>
          <span>Amount Due</span>
          </div>
        {paymentPlan.map((month, i) => (
          <div className="finance-table-item" key={i}>
            <div>
              <span className="input-label">{month.date}</span>
            </div>
            <div>
              <span className="input-label">£{month.payment}</span>
            </div>
            <div>
              <span className="input-label">£{month.amountDue}</span>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

FinancePaymentTable.propTypes = {
  averagePayments: PropTypes.number.isRequired,
  deliveryDate: PropTypes.string.isRequired,
  firstPayment: PropTypes.number.isRequired,
  lastPayment: PropTypes.number.isRequired,
  monthlyPayment: PropTypes.number.isRequired,
  totalLoanAmountIncludingCharges: PropTypes.string.isRequired,
};

export default FinancePaymentTable;
