import React from 'react';

export default props =>
    <nav className="navbar navbar-expand-md">
        <h1 className="navbar-brand">TODO</h1>
        <ul className="nav navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/all">All</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/history">History</a>
            </li>
        </ul>
    </nav>
