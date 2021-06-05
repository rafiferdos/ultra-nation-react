import React from 'react';
import { useHistory } from 'react-router';
import './Header.css'

const Header = () => {
    const history = useHistory();
    const handleSearch = () => {
        const searchKeyword = document.getElementById('search-input').value;
        history.push(`/search/${searchKeyword}`);
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand">Ultra Nation</a>
                    <form className="d-flex">
                        <input id = "search-input" className="form-control me-2" type="search" placeholder="Enter Country Name" aria-label="Search"></input>
                        <button onClick = {handleSearch} className="btn btn-outline-warning btn-lg" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default Header;