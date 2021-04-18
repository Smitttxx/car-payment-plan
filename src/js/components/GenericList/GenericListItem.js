import React from 'react';
import PropTypes from 'prop-types';
import { Link}  from "react-router-dom";


const GenericListItem = (props) => {

    if(props.url) {
        return (
            props.ListItems.map(ListItem => (
                <Link className="nav-link" to={props.url}>
                    <li className="travelcompany-input" key={ListItem.id}>
                        <span className="input-label">{ListItem.text}</span>
                    </li>
                </Link>
            ))

        )} else {
            return (
                props.ListItems.map(ListItem => (
                    <li className="travelcompany-input" key={ListItem.id}>
                        <span className="input-label">{ListItem.text}</span>
                    </li>
                ))
            )
        }

}

GenericListItem.propTypes = {
    ListItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    )
};

export default GenericListItem;
