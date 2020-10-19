import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

class Humberger extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    }

    handleOpen() {
        if (this.state.isOpen){
            this.setState({isOpen: false});
        }
        else {
            this.setState({isOpen: true});
        }
    }

    render() {
        return(
            <div id="buger-menu">
                <CSSTransition in={this.state.isOpen} timeout={400} classNames="drawer">
                    <div className="drawer">
                    <div className="links">
                        <Link to='/' class="link">Home</Link>
                        <br />
                        <Link to='/practice' class="link">Practice</Link>
                        <br />
                        <Link to='/contact' class="link">Contact</Link>
                        <br />
                    </div>
                    </div>
                </CSSTransition>
                <button type="button" id="buttonHamburger" className="button hamburger" onClick={() => {this.handleOpen()}}>
                    <span className="hamburger_line">
                         {/*<span class="visuallyHidden">
                         </span>*/}
                    </span>
                </button>
            </div>
        );
    }
}

export default Humberger;