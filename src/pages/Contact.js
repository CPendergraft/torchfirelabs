import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {MenuItem, NavDropdown} from "react-bootstrap";
import {Parallax} from "react-parallax";


class Contact extends Component {

    constructor({props}){
        super();

    }

    getBreakpoint(){

        let isMobile = false;

        const breakpoints = {
            desktop: 1040,
            tablet: 840,
            mobile: 414
        };

        if (window.innerWidth > breakpoints.tablet) {

        } else if (window.innerWidth > breakpoints.mobile) {

        } else if (window.innerWidth <= breakpoints.mobile) {
            isMobile = true;
        }

        return isMobile;
    }

    render() {
        const isMobile = this.getBreakpoint();
        let _class = isMobile?"border_bottom contact_holder_mobile":"border_bottom contact_holder";
        let _class2 = isMobile?"intro para_pad_mobile border_bottom":"intro  para_pad border_bottom";

        return (
            <Parallax
                id={5}
                blur={{ min: -15, max: 1 }}
                bgImage={require('../images/Mermaid_godreys_2.jpeg')}
                bgImageAlt="the cat"
                strength={90} >
            <div className={_class}>
                <div className={_class2}>

                    <h1>Contact Me</h1>
                    <hr></hr>
                    <h1><span  >Jon Christopher 'Chris' Pendergraft</span></h1>
                    <p>I am available to work throughout the San Francisco Bay Area.</p>
                    <hr></hr>
                    <a href="mailto:jonpendergraft@gmail.com">jonpendergraft@gmail.com</a><br/>
                    <a href="tel:5102073972">(510) 207-3972</a><br/>
                    <a   href="https://www.linkedin.com/in/chrispendergraft/" eventKey={4.3}>LinkedIn</a><br/>
                    <a  href="https://instagram.com/christopherpendergraft" eventKey={4.2}>Instagram</a><br/>
                    <a  href="https://soundcloud.com/chris-pendergraft" eventKey={4.3}>Soundcloud</a><br/>
                    <a  href="https://facebook.com/batukurakura" eventKey={4.1}>Facebook</a><br/>
                </div>


            </div>
            </Parallax>
        );
    }


}

Contact.propTypes = {
    study: PropTypes.object

}
const mapStateToProps = (state) => {

    return {
        study: state.selectItem.selectedItem
    }
}

export default connect(mapStateToProps)(Contact);