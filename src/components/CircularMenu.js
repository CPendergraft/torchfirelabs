import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {selectItem, selectSection} from "../actions";


class CircularMenu extends Component {

    constructor({props}){
        super();
        this.state ={selectItem:{}};
        this.handleClick = this.handleClick.bind(this);
        this.updateSectionItem = this.updateSectionItem.bind(this);
        this.updateSection = this.updateSection.bind(this);

    }
    updateSectionItem(item){
        this.props.dispatch(selectItem(item));
    }
    updateSection(item){
        if(item.section==='form'){
            this.props.dispatch(selectSection(true));
        }else{
            this.props.dispatch(selectSection(false));
        }
    }

    handleClick(item){

        console.log("shit", item);


         this.updateSectionItem(item);
         //this.updateSection(item);





    }
    handleSectionClick(val){


        this.props.dispatch(selectSection(val));





    }
    getList(){
        let {children} = this.props;

        let _this = this;

        let hold = [];


        children.forEach(function(item, index ) {
            let labelClass = "label_before";
            if(index<=3){
                labelClass = "label_after"
            }
            let lineClass = "line_before";
            if(index<=3){
                lineClass = "line_after"
            }

            let classNm = "deg"+ index +" circle-container_item";
if(index<=3){
    hold.push(
        <div className={classNm} key={index} onClick={()=> _this.handleClick(item) }   >

            <div className="inline_list" >
            <div className={labelClass}>{item.title} </div>
            <div className={lineClass}>  </div>
            </div>

        </div>
    );
}else{
    hold.push(
        <div className={classNm} key={index} onClick={()=> _this.handleClick(item) }   >
            <div className="inline_list" >

            <div className={labelClass}>{item.title} </div>
                <div className={lineClass}>  </div>
            </div>

        </div>
    );
}

        })
        return hold;
    }


    render() {


        return (
            <div className="circle-container" >
                {this.getList()}
              <div className="inline_list " >
                  <span className='deg_center'  onClick={()=> this.handleSectionClick(false)} >{'> '}</span>
                  <span className='deg_center_2'  onClick={()=> this.handleSectionClick(true)} >{'      <'} </span>
              </div>
            </div>
        );
    }


}

CircularMenu.propTypes = {
    children: PropTypes.array,
    dispatch:PropTypes.func

}
const mapStateToProps = (state) => {

    return {
        selectItem: state.selectItem.selectedItem,
        selectSection:  state.selectSection.selectedSection
    }
}

export default connect(mapStateToProps)(CircularMenu);