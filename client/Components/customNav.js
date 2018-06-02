import React from 'react';
/*
*   Navigation WORKING HISTORY
*
* */
export default props => {

    //active in navbar
    let activeWorking = props.navItemValue === "WORKING" ? 'active' : '';
    let activeHistory = props.navItemValue === "HISTORY" ? 'active' : '';

    return <nav className = "navbar navbar-expand-md" >
        <h1 className = "navbar-brand">TODO</h1>
        <ul className = "nav navbar-nav">
            <li className = {"nav-item " + activeWorking} >
                <a
                    className = "nav-link"
                    onClick = {() => props.onClick('WORKING')} >WORKING</a>
            </li>
            <li className = {"nav-item " + activeHistory}>
                <a className = "nav-link"
                   onClick = {() => props.onClick('HISTORY')} >HISTORY</a>
            </li>
        </ul>
    </nav>
}
