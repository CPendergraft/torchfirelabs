import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Parallax} from "react-parallax";
import Posts from "../components/Posts";
import {fetchPostsIfNeeded} from "../actions";


class Illustrations extends Component {

    constructor({props}){
        super();

    }
    static propTypes = {
        selectIllustrations: PropTypes.string,
        posts: PropTypes.array,
        isFetching: PropTypes.bool,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func,
        open: PropTypes.bool,
        audio:PropTypes.array,
        caseStore:PropTypes.array,
        selectItem:PropTypes.object,
        selectSection:PropTypes.object,
        breakpoints:PropTypes.object
    }
    componentDidMount() {
        const { dispatch, selectIllustrations } = this.props
        dispatch(fetchPostsIfNeeded(selectIllustrations))
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
        const {posts} = this.props;
        console.log("ill", posts);
        const isMobile = this.getBreakpoint();
        let _class = isMobile?"para_pad_mobile border_bottom":"para_pad border_bottom";


        return (
            <div className="center_hold"  >
                <Parallax
                    id={1}
                    bgImage={require('../images/giant.png')}
                    bgImageAlt="the cat"
                    strength={200}
                >

                    <div className="intro center_hold" >

                        <div className="spacer_horiz" />



                        <div className={_class} >
                            <h1>
                                Illustrations
                            </h1>
                            <hr></hr>
                            <p>
                                I have over 20 years of experience as an illustrator, working for start-ups, countless bands, and a few game companies.
                                I was trained in oil painting and printmaking.
                                I practice both traditional and digital mediums, and I variate from job to job, based on need.
                                My normal workflow is mixed media: Airbrush, ink, drawing and painting.
                                I also do digital illustration with a Wacom Cintiq.
                            </p>
                            <hr></hr>
                            <p>Click on any image below to enlarge</p>
                        </div>

                        <div className="spacer_horiz" />
                    </div>


                </Parallax>

                <Parallax
                    id={2}

                    bgImageAlt="the cat"
                    strength={400}
                >
                    <div className="outer_grid center_hold" >
                        {posts && <div >
                                <Posts posts={posts} />
                            </div>
                        }
                    </div>
                    <div className="spacer_horiz" />
                </Parallax>


            </div>
        );
    }


}


const mapStateToProps = state => {

    const { selectIllustrations, postsByillustrations, audio, caseStore, selectItem,selectSection } = state
    const {
        isFetching,
        lastUpdated,
        items: posts

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
        lastUpdated
    }
}

export default connect(mapStateToProps)(Illustrations);