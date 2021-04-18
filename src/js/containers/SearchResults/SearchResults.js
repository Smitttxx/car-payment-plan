import React, {useLocation} from 'react';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import SearchResults from '../../components/SearchResults/SearchResults'
import SearchInfo from '../../components/SearchResults/SearchInfo';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const SearchResultsContainer = () => {    
    return(
        <SiteWrapper>
            <ErrorBoundary>
            <h1>Search Results</h1>
            <SearchInfo />
            <SearchResults />
            </ErrorBoundary>
        </SiteWrapper>
    ) 
}

export default SearchResultsContainer;