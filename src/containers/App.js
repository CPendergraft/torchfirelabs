import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded } from '../actions';
import Posts from '../components/Posts';
import { Parallax } from 'react-parallax';
import { Navbar , Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { css } from 'emotion'
import { ClipLoader } from 'react-spinners';


import './App.css';
import AudioPlayer from "../components/AudioPlayer";
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
class App extends Component {

    constructor(props){
        super();
        console.log('constructor', props);
        this.state = {
            open: [false, true, false, true]
        };
    }


    static propTypes = {
        selectIllustrations: PropTypes.string,
        posts: PropTypes.array,
        isFetching: PropTypes.bool,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func,
        open: PropTypes.bool,
        audio:PropTypes.array
    }

    componentDidMount() {
        const { dispatch, selectIllustrations } = this.props
        dispatch(fetchPostsIfNeeded(selectIllustrations))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectIllustrations !== this.props.selectIllustrations) {
            const { dispatch, selectIllustrations } = nextProps
            dispatch(fetchPostsIfNeeded(selectIllustrations))
        }
    }

    handleClick(id) {
        let { open } = this.state;
        this.setState({
            open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
        });
    }
    scrollThere(id){
        let options =  { behavior:"smooth", block: "start"  };
        window.document.getElementById(id).scrollIntoView(options);
    }
        render() {
        const { posts, isFetching, audio } = this.props;

        const classes = isFetching? 'cover' : 'cover-hide';

        console.log("classes", classes);

        console.log(posts);
        const isEmpty = posts.length === 0;

        const logo = require('../images/logo_white_2.png');
        
        return (

            <div className="outside" >
                <div className="inside" >
                    <div className={classes} >
                        <div style={{width:"100%", textAlign:"center"}}  >
                        <div style={{width:"100%", textAlign:"center"}}><img alt="songart" src={logo} /> </div>
                        <ClipLoader
                            className={override}
                            sizeUnit={"px"}
                            size={150}
                            color={'#ffffff'}
                            loading={this.state.loading}
                        />
                    </div>
                    </div>











                    <Navbar inverse fixedTop collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#brand"><img alt="songart" style={{height:"50px",paddingBottom:"10px"}} src={logo} /> </a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={3} onClick={()=> this.scrollThere('code')}  href="#">
                                    WebDev
                                </NavItem>
                                <NavItem eventKey={3} onClick={()=> this.scrollThere('projects')}  href="#">
                                    Projects
                                </NavItem>
                                <NavItem eventKey={3} onClick={()=> this.scrollThere('clients')}  href="#">
                                    Clients
                                </NavItem>
                                <NavItem eventKey={1} onClick={()=> this.scrollThere('intro')} href="#">
                                    Illustration
                                </NavItem>
                                <NavItem eventKey={2} onClick={()=> this.scrollThere('sound')} href="#">
                                    Sound Design
                                </NavItem>


                            </Nav>
                            <Nav pullRight>
                                <NavDropdown eventKey={4} title="social" id="basic-nav-dropdown">
                                    <MenuItem   href="https://www.linkedin.com/in/chrispendergraft/" eventKey={4.3}>LinkedIn</MenuItem>
                                    <MenuItem  href="https://instagram.com/christopherpendergraft" eventKey={4.2}>Instagram</MenuItem>
                                    <MenuItem  href="https://soundcloud.com/chris-pendergraft" eventKey={4.3}>Soundcloud</MenuItem>
                                    <MenuItem  href="https://facebook.com/batukurakura" eventKey={4.1}>Facebook</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>




                    <div id='code' />
                    <Parallax
                        style={{maxWidth:"1200px" }}
                        id={0}
                        blur={{ min: -15, max: 1 }}
                        bgImage={require('../images/einstein_catching_the_light_by_chrispendergraft-d8bo4jl.jpg')}
                        bgImageAlt="the cat"
                        strength={120}
                    >

                        <div className="intro" >
                            <div className="spacer_horiz" />
                            <div className="para_pad border_bottom"  >
                                <img  alt="songart" style={{float:"left", paddingTop:"10px"}} src={require('../images/logo_white_2.png')} />
                                <p>
                                    My name is Chris Pendergraft. I am a multi-disciplinary artist and engineer who has worked in multi-media since 1998. I am an innovative and creative person with over 18 years experience in Web, Mobile and Game Development. Skills also include 3D and 2D Art, graphic design, illustration, animation, sound design and musical composition. From concepts to final creations, I am well versed every part of the digital creation process, and thrive in team collaboration.
                                    I am looking for jobs that take advantage of my professional experience in JavaScript and HTML5, while still utilizing my additional visual and audio skills to maximize my value. Agency and game shop experience has allowed me to work on many parts of the product assembly line, and I love wearing many hats (or robotic arms, if needed).


                                </p>
                            </div>
                            <div className="spacer_horiz" />

                            <h1>
                                Web Application Development
                            </h1>

                            <div className="para_pad border_bottom" >
                                <p>
                                    My process is simple. I meet with the client, determine the needs, the targets, and from there I choose the tech stack that makes the most sense; and gets us to the gate in the shortest amount of time.
                                    When looking at an app, I write it out on a whiteboard,  and from there I can determine the delegation of responsibilities of all of the parts of the entire system; front end, back end, and the data design.
                                    When working on a team or by myself, a clear scoping of the work is key yo success. The whiteboard helps me to see all of parts of the engine I am building, and that leads to better efficiency and to clearer code that is much easier to re-approach later on.
                                    I have been using HTML and JS since 1998. I was using Angular 1.x as my goto JS framework, until I started working in ReactJS in 2016. Recently I returned to Angular 4 and I really enjoyed the improvements the framework has made.
                                </p>
                                <div className="logo_list">
                                    <img alt="songart" className="logo_list_items" src={require('../images/reactredux.png')} />
                                    <img alt="songart"  className="logo_list_items" src={require('../images/angularLogo.png')} />
                                    <img alt="songart"  className="logo_list_items" src={require('../images/node.png')} />
                                    <img alt="songart"  className="logo_list_items" src={require('../images/WordPress.png')} />
                                    <img alt="songart"  className="logo_list_items" src={require('../images/ionic.png')} />

                                </div>


                            </div>


                        </div>
                        <div id="projects" />

                    </Parallax>

                    <div   className="row logo_list_top" ><h1>Projects</h1></div>
                    <div  className="row projects" >
                        <div   className="col-lg-3 col-sm-12 pad_top" >
                            <a href="http://offplanet.earth/gravity"   ><img  alt="songart" src={require("../images/clarity3.png")} /></a>
                        </div>

                        <div   className="col-lg-8 col-sm-12 pad_left  " >
                            <h2>Clarity for Soundcloud</h2>
                            <h4 ><i>A clarification user interface for Soundcloud with advanced search</i></h4>

                            <p>Clarity works as an 0Auth application that lets you log in to soundcloud with your identity. Once the page has loaded your stream is displayed in a visual format. A user can filter it down between uploads, reposts, and playlists.
                                Users can comment, repost and like all track uploads. This allows your stream to become manageable, and to filter the repost noise so you don't miss anyt releases of artist you folow.
                                <br/>
                                <br/>
                                Every artist out there want his or her music to get reposted, this is true. This viral propagation is what we all hope for,
                                but as your listener base grows, so does the amount of artists you follow, and it becomes harder and harder to keep up with everyone's activity except your own.
                                While building this app I was astounded as I made a call for a stream with 300 songs, on average a return of 7-12 songs that are actual uploads.
                                Clarity does not shut off reposts, that is often how we discover new music, rather Clarity allows you to control how you view the data.
                                <br/>
                                <br/>
                                Say you would like to listen to all the psyche rock tracks released in the last 24 hours? You can not do it on soundcloud; in a meaningful and simple manner. Clarity allows you
                                to search by tag, artist or genre, and even state the time range of release. Thousands of people use my app to keep up to date on a daily basis and that really make me happy.
                            </p>
                        </div>

                    </div>

                    <div  className="row projects" >
                        <div   className="col-lg-3 col-sm-12 pad_top pad_bottom" >
                            <a href="http://offplanet.earth/sickluggage"   > <img  alt="songart" src={require("../images/sickluggage.png")} /></a>
                        </div>

                        <div   className="col-lg-8 col-sm-12 pad_left  " >
                            <h2>SICKLUGGAGE - Co-founder & CTO</h2>
                            <h4 ><i>A durrable, skinnable, transformational boom box</i></h4>

                            <p>
                                More than a boombox, we are building a cultural podium – with enough power to change the future, one boombox at a time.
                                <br/>
                                <br/>


                            </p>
                        </div>

                    </div>
                    <div id="projects"  className="row projects" >
                        <div   className="col-lg-3 col-sm-12 pad_top pad_bottom" >
                            <a href="http://givvnow.com"   > <img  alt="songart" src={require("../images/givv.png")} /></a>
                        </div>

                        <div   className="col-lg-8 col-sm-12 pad_left  " >
                            <h2>Givv: Donations made simple.</h2>
                            <h4 ><i>We are putting the final touches on Givv. </i></h4>

                            <p>Your change can make a real difference
                                <br/>
                                <br/>
                                Givv is the best way to learn about and donate to charities that are truly making a difference in the world. Givv is the first app that automatically rounds up your purchases and donates your change to all the causes closest to your heart.  <br/>
                                <br/>
                                Round-up everyday purchases to donate with Givv no matter where you shop. Select whether your change goes to one or many charities of your choice - or let Givv pick for you. All of your data is protected with 256-bit encryption, and is never stored on your device.


                            </p>

                        </div>

                    </div>
                    <div id="clients" />


                    <div className="row" >
                        <div className="col-10" >
                            <div className="row logo_list_top" ><h1>Clients</h1></div>
                            <div className="logo_list clients">

                                <img alt="songart_2"  className="logo_list_items_2" src={require('../images/noon.png')} />
                                <img alt="songart_2"  className="logo_list_items_2" src={require('../images/onyx_square.png')} />
                                <img alt="songart_2"  className="logo_list_items_2" src={require('../images/Gensler-logo.png')} />
                                <img alt="songart_2"  className="logo_list_items_2" src={require('../images/wellsLogo.jpg')} />
                                <img alt="songart_2"  className="logo_list_items_2" src={require('../images/Hitachi.png')} />

                                <img alt="songart_2"  className="logo_list_items_2" src={require('../images/Mattel-Logo.png')} />
                                <img alt="songart_2"  className="logo_list_items_2" src={require('../images/Hasbro.png')} />

                            </div>
                        </div>

                    </div>
                    <div id='intro' />

                    <Parallax
                        id={1}
                        bgImage={require('../images/giant.png')}
                        bgImageAlt="the cat"
                        strength={200}
                    >

                        <div className="intro " >



                            <h1>
                                Illustration
                            </h1>

                            <div className="para_pad border_bottom" >
                                <p>
                                    I have over 20 years of experience as an illustrator, working for start-ups, countless bands, and a few game companies.
                                    I was trained in oil painting and printmaking.
                                    I practice both traditional and digital mediums, and I variate from job to job, based on need.
                                    My normal workflow is mixed media: Airbrush, ink, drawing and painting.
                                    I also do digital illustration with a Wacom Cintiq.
                                </p>

                            </div>
                            <div className="spacer_horiz" />
                        </div>


                    </Parallax>

                    <Parallax
                        id={2}

                        bgImageAlt="the cat"
                        strength={400}
                    >
                        <div className="outer_grid" >
                            { isEmpty
                                ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                                : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                                    <Posts posts={posts} />
                                </div>
                            }
                        </div>
                    </Parallax>
                    <div id='sound' />
                    <Parallax style={{maxWidth:"1185px", marginLeft:"7px"}}
                              id={5}
                              blur={{ min: -15, max: 1 }}
                              bgImage={require('../images/FortuneTeller3.png')}
                              bgImageAlt="the cat"
                              strength={90}
                    >

                        <div className="intro " >
                            <div className="spacer_horiz" />
                            <h1>
                                Sound Design and Composition
                            </h1>

                            <div className="para_pad border_bottom" >
                                <p>
                                    I have written and recorded over 500 songs  and am the writer for several projects. The Night Kitchen, EarthMother One, Batu Kura Kura, TorchfireHeart, Echocosmic and Oakland's RedShift.
                                    I grew up in a musical family and studied classical and jazz as well as sound recording and mixing.

                                    <br/>
                                    <br/>
                                    My song "Dare to Dream" stood  in 2016 on the soundcloud charts at #1 in Rock and Indie for just over 3 weeks with 1.4 million plays.
                                    I am lucky beyond all measure to have the support I do, and I really appreciate it. Music is a giant part of my life, and I am always trying to find a place for tech and music on the web.
                                    After listening to a whole lot of dissatisfactions of the soundcloud community, I designed an web app that allows user to filter reposts from content, and really take advantaged of the advanced search that the soundcloud api allows, but chooses  not to surface in the web or mobile clients. Check out  <a href="https://offplanet.earth/gravity">Clarity</a> to see my app
                                    in use(*requires soundcloud account).
                                    <h3>Top 50 songs ranked by play count:</h3>
                                    <p>Click on any image below to launch a song</p>
                                </p>
                            </div>

                        </div>

                        <AudioPlayer audio={audio}/>
                    </Parallax>

                    <Navbar inverse fixedBottom >
                        <Navbar.Brand  >
                          <span className="s_s">  ©2018 TORCHFIRELABS. ALL RIGHTS RESERVED.</span>
                        </Navbar.Brand>
                    </Navbar>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

    const { selectIllustrations, postsByillustrations, audio } = state
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
        selectIllustrations,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)