import React from 'react';
import PropTypes from 'prop-types';
import GenericListItem from './GenericListItem';

const GenericList = (props) => {
    const headerText = props.headerText;
    const ListItems = props.ListItems;

    return (
            <div className="homepage-info">
                <h3>{headerText}</h3>
                <ul>
                    <GenericListItem ListItems={ListItems}/>
                </ul>
            </div>
    )
}

GenericList.propTypes = {
    headerText: PropTypes.string.isRequired,
    ListItems: PropTypes.array.isRequired,
};

export default GenericList;
