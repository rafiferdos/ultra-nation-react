import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countries, setCounties] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
                .then(data => setCounties(data))
    }, []);

    return (
        <div>
            <div className="container" style = {{marginTop: '130px'}}>
                <div class="row row-cols-1 row-cols-md-5 g-2">
                    {
                        countries.map(country => <Country key = {country.numericCode} country = {country} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;