import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {OverlayTrigger, Tooltip, Badge} from 'react-bootstrap'


class AudioPlayer extends Component {

    constructor({props}){
        super();
        this.state ={playerid:"244097063", showIframe:false, removeiframe:true};
    }
    closeIframe(){
        this.setState({

            showIframe:false
        })

        setTimeout(function() { //Start the timer
            this.setState({ removeiframe: true}) //After 1 second, set render to true
        }.bind(this), 2000)
    }

    onClickSelect(id){
        this.setState({
            playerid:id,
            removeiframe:false
        })
        setTimeout(function() { //Start the timer
            this.setState({ showIframe: true}) //After 1 second, set render to true
        }.bind(this), 2000)
    }
    getToolTip(song){

        return(
            <Tooltip id="tooltip">
                <div className="row ">
                    <div className="col-6 pad_top">
                        <img src={song.artwork_url} alt="songart" />
                    </div>
                    <div className="col-6 pad_tip">
                        <strong>{song.title}</strong>
                        <br/>   <br/>
                        <p>
                            genre: <Badge>{song.genre}</Badge>
                            <br/>
                            <br/>
                            playcount: <Badge>{(song.playback_count).toLocaleString()}</Badge>
                            <br/>
                            <br/>
                            reposts: <Badge>{(song.reposts_count).toLocaleString()}</Badge>

                        </p>


                    </div>
                </div>
            </Tooltip>
        )

    }
    getList(){
        let {audio} = this.props;



            let hold = [];


            audio.sort((a, b) => b.playback_count - a.playback_count).map((i) =>{
                console.log("test",i.title);
                hold.push(
                        <OverlayTrigger  trigger={[ 'hover' ]} placement="top" overlay={this.getToolTip(i)}><div className="audio_item">
                                <a onClick={()=> this.onClickSelect(i.id)} ><img alt="songart" src={i.artwork_url} /></a>
                            </div>
                        </OverlayTrigger>
                );
            })
        return hold;
        }


    render() {

        const {playerid, showIframe, removeiframe} = this.state;
        let classes = showIframe ? 'iframeholder' : 'iframeholder-hide';
        let bar_classes = showIframe ? 'control_bar' : 'control_bar-hide';
        console.log("playerid",playerid);
        let test=this.getList();

        let currentURL = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+ playerid +"&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true"
         console.log("currentURL",currentURL);
        return (
            <div>
                { showIframe && <div className={bar_classes} onClick={()=> this.closeIframe()}  ><div className="btn btn-success frame_right" >Close X</div></div>}
                {!removeiframe &&
                <div className={classes}  >

                    <iframe title="soundcloud" onClick={()=> this.closeIframe()} width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                        src={currentURL}></iframe>
                 </div>}
                <div className="audio_player_holder">{test} </div>
            </div>
    );
    }


}

AudioPlayer.propTypeps = {
    audio: PropTypes.array

}
const mapStateToProps = (state) => {

    return {
        audio: state.audio
    }
}

export default connect(mapStateToProps)(AudioPlayer);