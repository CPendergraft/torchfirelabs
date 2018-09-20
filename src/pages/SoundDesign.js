import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Parallax} from "react-parallax";
import Posts from "../components/Posts";
import {fetchPostsIfNeeded} from "../actions";
import AudioPlayer from "../components/AudioPlayer";


class SoundDesign extends Component {

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
        const {audio} = this.props;
        const isMobile = this.getBreakpoint();
        let _class = isMobile?"para_pad_mobile border_bottom":"para_pad border_bottom";


        return (
            <div className="center_hold center_hold"  >
                <Parallax
                          id={5}
                          blur={{ min: -15, max: 1 }}
                          bgImage={require('../images/DesignTheExperience.jpeg')}
                          bgImageAlt="the cat"
                          strength={90} >


                    <div className="intro center_hold" >

                        <div className="spacer_horiz" />



                        <div className={_class} >
                            <h1>
                                Sound Design and Music Composition
                            </h1>
                            <hr></hr>
                            <p>
                                I have written and recorded over 500 songs  and am the writer for several projects. The Night Kitchen, EarthMother One, Batu Kura Kura, TorchfireHeart, Echocosmic and Oakland's RedShift.
                                I grew up in a musical family and studied classical and jazz as well as sound recording and mixing.

                                <br/>
                                <br/>
                                My song "Dare to Dream" stood on the soundcloud charts at #1 in Rock and Indie until it reached 1.4 million plays.
                                I am lucky beyond all measure to have the support I do, and I really appreciate it. Music is a giant part of my life, and I am always trying to find a place for tech and music on the web.
                                After listening to a whole lot of the dissatisfaction of the SoundCloud community, I designed an web app Clarity that allows user to filter reposts from content, and really take advantaged of the advanced search that the soundcloud api allows, but chooses  not to surface in the web or mobile clients.<br/>Check out  <a href="https://offplanet.earth/gravity">Clarity</a> to see my app
                                in use(*requires soundcloud account).
                                <h3>Top 40 songs ranked by play count:</h3>
                                <hr></hr>

                            </p>
                            <p>Click on any image below to play a song</p>
                        </div>

                        <div className="spacer_horiz" />
                    </div>
                    <AudioPlayer audio={audio}/>
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

export default connect(mapStateToProps)(SoundDesign);