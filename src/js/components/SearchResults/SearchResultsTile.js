import React, { useState } from "react";
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import noImage from '../../../images/generic-sedan-silo.jpg';
import FinanceOptionsModal from "./FinanceOptionsModal";


const SearchResultsTile = (props) => {

  const branchName = props.data.branch.name
  const branchphone = props.data.branch.phone;
  const carMake = props.data.make;
  const carModel = props.data.model;
  const cashPrice = props.data.salesInfo.pricing.cashPrice
  const carSummary = props.data.salesInfo.summary

  const [carImage, setCarImage] = useState(props.data.photos[0]);

  if (carImage === undefined){
    setCarImage(noImage);
  }

  const [modalIsOpen,setModalIsOpen] = useState(false);

  Modal.setAppElement('body');

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

  return (
      <div className="search-result__tile">
        <img src={carImage} alt={carMake}></img>
        <div><span>Branch Name: </span><span>{branchName}</span></div> 
        <div><span>Phone: </span><span>{branchphone}</span></div> 
        <div><span>Make: </span><span>{carMake}</span></div> 
        <div><span>Model: </span><span>{carModel}</span></div> 
        <div><span>Price: </span><span>£{cashPrice}</span></div> 
        <div><span>Car Details: </span>
        <ul>
        {carSummary.map(result => {
            return <li>{result}</li>
        })} 
        </ul>

      </div> 

      <button className="button--primary" onClick={setModalIsOpenToTrue}>View Finance Options</button>

      <Modal isOpen={modalIsOpen} ariaHideApp={false} contentLabel="Selected Option">
                <button className="button--primary" onClick={setModalIsOpenToFalse}>x</button>
                <FinanceOptionsModal carPrice={cashPrice}/>
      </Modal>

      </div>
  );
};


SearchResultsTile.propTypes = {
  branchName: PropTypes.string,
  branchphone: PropTypes.string,
  carMake: PropTypes.string,
  carModel: PropTypes.string,
  cashPrice: PropTypes.string,
  carSummary: PropTypes.array,
};

export default SearchResultsTile;
