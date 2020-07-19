import React, { Component } from 'react';
import { connect } from 'react-redux';


const SingleMeme = ({name, url}) => {
    return (
    <div>
        <img src={url} height='100' alt={name}/>
        <h4>{name}</h4>
    </div>);
}

class MemeGallery extends Component {
    
    render() {
        return (
            <div>
            <h2>Welcome to the Meme Generator!</h2>
            <div className='meme-layout'>
                {
                    this.props.memes.map((meme, index) => {
                        return (
                            <div key={index}>{SingleMeme(meme)} </div>
                        )
                    })
                }
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(MemeGallery);