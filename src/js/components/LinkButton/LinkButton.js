import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from "react-router-dom";

const LinkButton = (props) => {

    const type = props.type;
    const path= props.path;
    const buttonClass = props.buttonClass;
    const buttonText = props.buttonText;

    return (
        <Link to={path}><button type={type} className={"button--" + buttonClass}>{buttonText}</button></Link>
    )
}

LinkButton.propTypes = {
    type: PropTypes.string,
    buttonClass: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default withRouter(LinkButton);