import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../containers/App.css';

class CaseStudy extends Component {

    constructor({props}){
        super();
        this.state ={playerid:"244097063", showIframe:false, removeiframe:true};
    }

    getTagList(tags){

        let hold = [];
        tags.forEach(function (item, index) {

            let list_item = (<li key={index} className="badge" >{'#'}{item}</li>);
            hold.push(list_item);
        })
        return hold;
    }

    render() {

        const { study } = this.props;
        const  tags =  this.getTagList(study.case_tags);
        console.log("tags", study);
        return (
            <div className="case_holder">
                <div className="case_wrapper">
                    <div >
                        <img className="case_image" alt="case study" src={ study.case_img } />
                     </div>
                    <div  >
                        <div className="case_content_top" >
                            <h2>{ study.case_title } </h2>
                            <p> { study.case_description_problem } </p>
                            <p> { study.case_description_solution } </p>
                        </div>
                        <div className="case_content_tags" >
                            <ul className="case_content_tags_list" >
                                { tags}
                            </ul>
                        </div>
                    </div>
             </div>


            </div>
        );
    }


}

CaseStudy.propTypes = {
    study: PropTypes.object

}
const mapStateToProps = (state) => {

    return {
        study: state.selectItem.selectedItem
    }
}

export default connect(mapStateToProps)(CaseStudy);