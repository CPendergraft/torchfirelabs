import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPostsIfNeeded, selectSection, selectItem} from '../actions';



import './App.css';
import CircularMenu from "../components/CircularMenu";

import Overview from "../components/Overview";
import Overview_mobile from "../components/Overview_mobile";
import { Parallax } from 'react-parallax';


import {css} from "emotion";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
class App extends Component {

    constructor(props){
        super();
        this.updateSize = this.updateSize.bind(this);


        this.state = {
            open: [false, true, false, true],
            updated:false

        };
    }


    static propTypes = {
        selectIllustrations: PropTypes.string,
        posts: PropTypes.array,
        isFetching: PropTypes.bool,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func,
        open: PropTypes.bool,
        updated: PropTypes.bool,
        audio:PropTypes.array,
        caseStore:PropTypes.array,
        selectItem:PropTypes.object,
        selectSection:PropTypes.object,
        breakpoints:PropTypes.object,
        leftClass:PropTypes.string,
        rightClass:PropTypes.string,
        showIntro:PropTypes.bool,
        menuClass:PropTypes.string,
    }

    componentDidMount() {

        const { dispatch, selectIllustrations } = this.props;

        if(selectSection!==undefined){
            dispatch(selectSection(null));
            dispatch(selectItem(null));
        }

        dispatch(fetchPostsIfNeeded(selectIllustrations));
        window.addEventListener("resize", this.updateSize);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectIllustrations !== this.props.selectIllustrations) {
            const { dispatch, selectIllustrations } = nextProps
            dispatch(fetchPostsIfNeeded(selectIllustrations))
        }
    }
    handleMenuClick(){

        this.props.dispatch(selectSection(this.props.selectSection.selectedSection?false:true));
    }
    handleClick(id) {
        let { open } = this.state;
        this.setState({
            open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
        });
    }
    mainNavHandler(val){

        this.props.dispatch(selectSection(val));

    }
    scrollThere(id){
        let options =  { behavior:"smooth", block: "start"  };
        window.document.getElementById(id).scrollIntoView(options);
    }
    updateSize(){
        let {updated} = this.props;
        let _updated = updated?false:true;
        this.setState({updated:_updated})
    }
    getSlides(menuitems){

        let listItems = menuitems.map((child) =>

            <div key={child.title}>  <Overview_mobile study={child}/> </div>
          );


        let ret = (
            <div className="mobile_list">{listItems}</div>
        );
        console.log('ret', ret);
        return ret;
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

    getSubClass(baseclass, label){
        const {selectItem} = this.props;
        let ret = baseclass;
            if(selectItem.selectedItem){
                if(label === selectItem.selectedItem.title ){
                    ret = baseclass + " selected";
                }
            }
            console.log("gertClass", ret);
        return ret;
    }

        render() {
        const { caseStore, posts, isFetching, audio, breakpoints  } = this.props;
        const menuitems = caseStore;

            console.log("breakpoints", breakpoints);
        let isMobile = this.getBreakpoint();
        let {selectItem} = this.props;
        let {selectSection} = this.props;
        let showDefault = false;
        const isEmpty = posts.length === 0;
         let mainContentClass = isMobile?   "content_wrapper_mobile":"content_wrapper";
        let leftClass = "left_container";
        let rightClass = "right_container";
        let showIntro = false;
        let menuClass = "menu_Show_middle";
         let items = [];
            if(menuitems){
          items = this.getSlides(menuitems);
        }

        console.log("items", items);
            if(selectSection.selectedSection===undefined){

                showIntro = false;
                console.log("wwwwww", selectItem.selectedItem);
                if(selectItem.selectedItem) {
                    if (selectItem.selectedItem.section === "form") {

                        menuClass = "menu_Show_right";
                        leftClass = "left_container_active";
                        rightClass = "right_container_hidden";
                    } else {
                        menuClass = "menu_Show_left";
                        leftClass = "left_container_hidden";
                        rightClass = "right_container_active";
                    }
                }
                console.log("menu clASS", menuClass);
            }


            if(selectSection.selectedSection !== undefined) {
            showIntro = true;
                menuClass =   selectSection.selectedSection ? "menu_Show_right":"menu_Show_left";
                if(menuClass==="menu_Show_right"){
                    leftClass = "left_container_active";
                    rightClass = "right_container_hidden";

                }else{


                    leftClass = "left_container_hidden";
                    rightClass = "right_container_active";
                }


        }

        if(menuClass==="menu_Show_middle"){
            showDefault = true;
        }

            const logo = require('../images/logo_white_2.png');
            const classes = isFetching? 'cover' : 'cover-hide';

        return (

            <div  id="dave"  className="outer_container" >
                <div className={classes} >
                    <div style={{width:"100%", textAlign:"center"}}  >
                        <div style={{width:"100%", textAlign:"center"}}><img alt="songart" src={logo} /> </div>

                    </div>
                </div>

                {showDefault &&   <div className="intro_text_block_top" > <h2> Chris Pendergraft</h2> <h1> Application Engineer and Multimedia Expert</h1><div className="inline_list_ds pl4"><div style={{width:"33%"}}><hr></hr></div><div  style={{width:"33%", paddingTop:"10px"}}>TORCHFIRELABS</div><div  style={{width:"33%"}}><hr></hr></div></div></div>}
                {showDefault && !isMobile &&  <div className="intro_text_block_outer" >

                    <h1>Flight is a perfect example of form and function.</h1>

                    <h2>
                       The function is a product of the form of flight
                       <br/>
                       and form is dictated by the function of flight.

                       <br/><br/>

                       <i>  The shape of a feather, or a bird’s wing, is the function of form, in perfect balance.</i></h2>


                </div> }

                { !isMobile &&  <div className={leftClass} >
                    <div className="main_h1_link">  <h1><a onClick={()=> this.mainNavHandler(true)}>{'<form />  '}</a></h1></div>
                    <div className={showIntro?"intro_left":"intro_left_hidden"}>
                        <h1>The Purpose of Form</h1>
                        <hr />
                        <p>
                            Form represents, to me, the essence of an idea, and how that idea is presented. In its simplest reduction, form is the shape of something.
                            In the case of a website form may be considered just the design layer, but its shape is presented in a format that meets the boundaries
                            and functions of a web browser. The shape of a feather, or a bird’s wing, is the form that serves the function, in perfect balance.
                            When we communicate with data, like an amazing chart that shows us the world in a new way, form and function find balance.
                            When we offer a web application that makes people’s lives better, we find balance in both sides.
                        </p>
                    </div>
                    <div    className={this.getSubClass("content_left_0", "Understand The Brand")} >
                        { selectItem.selectedItem &&  <Overview study={selectItem.selectedItem}/> }
                    </div>
                    <div    className={this.getSubClass("content_left_1", "Imagine The Enhancement")} > >
                        { selectItem.selectedItem &&  <Overview study={selectItem.selectedItem}/> }</div>
                    <div  className={this.getSubClass("content_left_2", "Design The Experience")} >
                        { selectItem.selectedItem &&  <Overview study={selectItem.selectedItem}/> }</div>
                    <div   className={this.getSubClass("content_left_3", "Tell The Story")} >
                        { selectItem.selectedItem &&  <Overview study={selectItem.selectedItem}/> }
                    </div>




                </div> }


                { !isMobile && <div className={rightClass} >
                    <div className="main_h1_link">  <h1><a onClick={()=> this.mainNavHandler(false)}>{'<function />  '}</a></h1></div>

                    <div className={showIntro?"intro_right":"intro_right_hidden"}>
                    <h1>The Purpose of Function</h1>
                        <p>
                            The purpose of function is to take a idea, or a shape, and make it real in the world.
                            Function is often considered from a purely analytical perspective,
                            but each decision of design must render this same effectiveness.
                            Every good mechanical decision comes down to a purpose driven design, or a functional design perspective.
                        </p>
                    </div>
                    <div    className={this.getSubClass("content_right_0", "Extend The Capability")} >
                        { selectItem.selectedItem &&  <Overview   study={selectItem.selectedItem}/> }
                    </div>
                    <div    className={this.getSubClass("content_right_1", "Execute The Vision")} >
                        { selectItem.selectedItem &&  <Overview   study={selectItem.selectedItem}/> }</div>
                    <div  className={this.getSubClass("content_right_2", "Determine The Solution")} >
                        { selectItem.selectedItem &&  <Overview   study={selectItem.selectedItem}/> }</div>
                    <div   className={this.getSubClass("content_right_3", "Understand The Problem")} >
                         { selectItem.selectedItem &&  <Overview  study={selectItem.selectedItem}/> }
                    </div>

                </div> }
                { !isMobile &&  <div className={menuClass} >
                    <CircularMenu children={menuitems} />
                </div>}

                {isMobile &&
                    <div className="mobile_cards">
                        <h1>Web Development </h1>
                        <hr></hr>
                           {items}
                    </div>
                }


            </div>
        )
    }
}

const mapStateToProps = state => {

    const { selectIllustrations, postsByillustrations, audio, caseStore, selectItem,selectSection, updated, leftClass, rightClass, showIntro, menuClass} = state
    const {
        isFetching,
        lastUpdated,
        items: posts,


    } = postsByillustrations[selectIllustrations] || {
        isFetching: true,
        items: []
    }

    return {
        audio,
        caseStore,
        selectItem,
        selectSection,
        selectIllustrations,
        posts,
        isFetching,
        lastUpdated,
        updated,
        leftClass,
        rightClass,
        showIntro,
        menuClass
    }
}

export default connect(mapStateToProps)(App)
