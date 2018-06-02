import React from 'react';

import Tasks from './Tasks';
import CustomNav from './customNav';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state =
        {
            navItemName : 'WORKING',
            changeNav: 0 //change in NavBar
        };
        this.onClickNavBar = this.onClickNavBar.bind(this);
    }

    render() {
        return (
            <div className="overlay">
                <CustomNav
                    onClick = {this.onClickNavBar}
                    navItemValue = {this.state.navItemName}
                />
                <Tasks
                    navItem = {this.state.navItemName}
                    navChange = {this.state.changeNav}
                />
            </div>
        )
    }

    onClickNavBar (navItem)  {
        this.setState({
            navItemName : navItem,
            changeNav: 1
        })
    }

}

export default App;
