import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './CountryDetail.css'
import { Link } from 'react-router-dom';

const CountryDetail = () => {
        const [country, setCountry] = useState({});
    
        const { countryName } = useParams();
        useEffect(() => {
            fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
                .then(res => res.json())
                    .then(data => setCountry(data[0]))
        }, [countryName]);
    
        const { flag, name, capital, nativeName, area, population, region, subregion, demonym, alpha2Code, alpha3Code, callingCodes, numericCode } = country;
    return (
        <>
         <div className="card shadow" style={{ maxWidth: "540px", margin: "130px auto 30px auto" }}>
            <img src={flag} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h3 className="card-title text-center">{name}</h3>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <th>Native name:</th>
                            <td>{nativeName}</td>
                        </tr>
                        <tr>
                                <th>Capital:</th>
                                <td>{capital}</td>
                            </tr>
                            <tr>
                                <th>Area:</th>
                                <td>{area}</td>
                            </tr>
                            <tr>
                                <th>Population:</th>
                                <td>{population}</td>
                            </tr>
                            <tr>
                                <th>Region:</th>
                                <td>{region}</td>
                            </tr>
                            <tr>
                                <th>Sub Region:</th>
                                <td>{subregion}</td>
                            </tr>
                            <tr>
                                <th>Demonym:</th>
                                <td>{demonym}</td>
                            </tr>
                            <tr>
                                <th>Alpha-2 & Alpha-3 Code:</th>
                                <td>{alpha2Code} & {alpha3Code}</td>
                            </tr>
                            <tr>
                                <th>Country Code:</th>
                                <td>{callingCodes}</td>
                            </tr>
                            <tr>
                                <th>Numeric Code:</th>
                                <td>{numericCode}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
         <div className="text-center">
                <Link to="/home">
                    <button type="button" className="btn btn-outline-warning px-4 py-2">Back to Home</button>
                </Link>
            </div>
         </div>   
        </>
    );
};

export default CountryDetail;