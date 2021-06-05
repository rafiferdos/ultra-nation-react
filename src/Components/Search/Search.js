import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Country from '../Country/Country';
import NoMatch from '../NoMatch/NoMatch'

const Search = () => {
    const [search, setSearch] = useState({});
    const {searchKeyword} = useParams();
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${searchKeyword}`;
        fetch(url)
            .then(res =>res.json())
                .then(data => setSearch(data[0]))
    }, [searchKeyword])
    return (
        <div className="container mt-5">
            <div className="row row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
                {
                    search ? <Country key={search.numericCode} country={search} /> : <NoMatch />
                }
            </div>
        </div>
    );
};

export default Search;