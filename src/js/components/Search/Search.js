import React from "react";
import SiteWrapper from "../SiteWrapper/SiteWrapper";
import SearchForm from "./SearchForm";

const Search = () => {
  return (
    <SiteWrapper>
      <h2>Lets find your perfect Car!</h2>
      <p>
        First if you could tell us some information to narrow our search so you
        can help the customer with data that is relevant to them
      </p>
      <SearchForm />
    </SiteWrapper>
  );
};

export default Search;
