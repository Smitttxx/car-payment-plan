import React, { useState, useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import SearchResultsTile from "../../components/SearchResults/SearchResultsTile";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const { state } = useLocation();

  useLayoutEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.arnoldclark.com/used-cars/search.json?payment_type=monthly&min_price=100&max_price=150"
      );

      setData(result.data.searchResults);
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div className="loading">Loading Results ... </div>;
  } 

  if (data.length !== 0) {
      return (
          <div className="search-result__grid">
                {data.map(item => {
                    return item.salesInfo.pricing.cashPrice < state.vehiclePrice.vehiclePrice
                        ? <SearchResultsTile data={item} state={state}/>
                        : null
                    }
                )
            }
          </div>
    );
  }
};

export default SearchResults;
