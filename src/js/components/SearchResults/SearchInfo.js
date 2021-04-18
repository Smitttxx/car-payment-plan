import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';


const SearchInfo = () => {

    const { state } = useLocation();

    const vehiclePrice = state.vehiclePrice.vehiclePrice;
    const depositAmount = state.depositAmount.depositAmount;
    const deliveryDate = state.deliveryDate.deliveryDate.toGMTString().split(' ').slice(0, 4).join(' ');
    const financeOption = state.financeOption.financeOption;

  return (
      <Fragment>
          <h3 className="search-info__title">What did you search for?</h3>
          <div className="search-info">
              <div className="search-info__item"> <span>Vehicle Price</span><span>£{vehiclePrice}</span></div>
              <div className="search-info__item"> <span>Vehicle Desposit</span><span>£{depositAmount}</span></div>
              <div className="search-info__item"> <span>Vehicle Delivery Date</span><span>{deliveryDate}</span></div>
              <div className="search-info__item"> <span>Finance Options</span><span>{financeOption} {financeOption > 1 ? "years" : "year" }</span></div>
          </div>
      </Fragment>
  );
};

SearchInfo.propTypes = {
    vehiclePrice: PropTypes.string.isRequired,
    depositAmount: PropTypes.string.isRequired,
    deliveryDate: PropTypes.string.isRequired,
    fincanceOption: PropTypes.string.isRequired,
};


export default SearchInfo;
