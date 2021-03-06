import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../containers/App.css';

class Overview_mobile extends Component {

    constructor({props}){
        super();

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
        console.log("study", study);


            const  tags =  this.getTagList(study.case_tags);


        return (

                <div className="overview_wrapper">


                     <div className="overview_content_mobile" >
                            <div className="overview_content_pad_mobile"> <h2>{ study.title } {':'}</h2>
                            <h3>{ study.item_title } </h3>
                            <hr />
                            <p> { study.item_description } </p>

                            <hr />
                            <h3> See how I played a role in {study.case_title} ---> </h3>
                            </div>

                        </div>

                    <div className="case_wrapper_mobile">
                        <div >
                            <img className="case_image_mobile" alt="case study" src={ study.case_img } />
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

Overview_mobile.propTypes = {
    study: PropTypes.object

}
const mapStateToProps = (state) => {


}

export default connect(mapStateToProps)(Overview_mobile);