import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Gallery from "react-grid-gallery";



class Posts extends Component {

    constructor(props){
        super();

    }




  processJson(posts){
    let retArray = [];
    posts.forEach(function(post){
        let newObj = {};
        newObj.caption = post.illustration_title;
        newObj.src = post.illustration_image.guid;
        newObj.isSelected = false;

        newObj.thumbnail = post.illustration_image.guid;

        retArray.push(newObj);
    });
    console.log(retArray);
    return retArray;

}

   render(){
        let rowSize = 230;
        console.log('rowSize', rowSize);
       const captionStyle = {
           backgroundColor: "rgba(0, 0, 0, 0.8)",
           maxHeight: "240px",
           overflow: "hidden",
           position: "absolute",
           bottom: "0",
           width: "100%",
           color: "white",
           padding: "2px",
           fontSize: "90%"
       };


   const  viewportStyleFn = function() {


           return {
                width:'100%',
                textAlign: 'center',
                backgroundColor: '#222222',



                }
    }
    const images = this.processJson(this.props.posts).map((i) => {
        i.customOverlay = (
            <div style={captionStyle}>
                <div>{i.caption}</div>
                {i.hasOwnProperty('tags') &&
                this.setCustomTags(i)}
            </div>);
        return i;
    });

       return (
           <Gallery  enableImageSelection={false} tileViewportStyle={viewportStyleFn} rowHeight={rowSize} margin={5}   images={images} enableLightbox={true} backdropClosesModal={true}/>
       );
}



}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
    windowHeight: PropTypes.number,
    windowWidth: PropTypes.number

}

export default Posts