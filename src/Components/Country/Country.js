import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useHistory } from 'react-router';
import './Country.css'

const Country = (props) => {
        const { name, capital, area, population, region, flag } = props.country;
    
        const history = useHistory();
        const handleClick = countryName => {
            history.push(`/country/${countryName}`);
        }

    return (
        <div>
            <div class="col">
                <div class="card h-100">
                    <img src={flag} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title text-center">{name}</h5>
                    <p class="card-text">Capital: {capital}</p>
                    <p class="card-text">Population: {population}</p>
                    <p class="card-text">Capital: {capital}</p>
                    <p class="card-text">Area: {area}</p>
                    <p class="card-text">Region: {region}</p>
                    
                    <button onClick={() => handleClick(name)} type="button" className = "btn btn-outline-dark">Show Details <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
                </div>
            </div>
        </div>
    );
};


export default Country;