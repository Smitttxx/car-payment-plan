import React, { Fragment } from 'react';
import LinkButton from '../../components/LinkButton/LinkButton';
import GenericList from '../../components/GenericList/GenericList';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';


const HomepageInfoContainer = () => {

    let ListItems = [
        { id: 1, text:'The application should allow the Product Consultant to input a vehicle price, deposit amount, delivery date, and select from 1, 2, or 3-year finance options.' },
        { id: 2, text:'The completed application should calculate and display a quote showing a summary of the loan and a payment schedule showing monthly payments with date and amount due.' },
        { id: 3, text:'There is a minimum 15% deposit based on the vehicle price.'},
        { id: 4, text:'On the first month’s payment add an £88 arrangement fee, and on the last a £20 completion fee.'},
        { id: 5, text:'Payments are due on the first day of each month, beginning the month after delivery.'},
        { id: 6, text:'Using this API, display the top vehicles which may be affordable based on the monthly payments This will return a JSON response. Were most interested in the `searchResults` array.'},
        { id: 7, text:'We’d like you to use React. On top of that, use whatever frontend libraries and tooling you feel comfortable with. We are interested in modern, clean coding principles, unit tests, advocating for the user in terms of UI/UX, demonstrating semantically correct and accessible HTML, and a maintainable approach to CSS.'}
    ];

    return (
        <Fragment>
            <SiteWrapper>
            <GenericList headerText="What will this Application do?" ListItems={ListItems}/>
            <p>The CORS issue was resolved by having a plug in called Moesif Origin and CORS Changer
 on chrome. This can be found at :- https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US</p>
            <LinkButton path="/search" buttonText="Lets get started" buttonClass="primary"/>
            </SiteWrapper>
        </Fragment>
    )
}

export default HomepageInfoContainer;