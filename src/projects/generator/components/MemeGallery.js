import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import MemeItem from './MemeItem'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MyMemes from './MyMemes'

class MemeGallery extends Component {
    
    constructor() {
        super();
    
        this.state = {
          memeLimit: 10,
          text0: "",
          text1: ""
        }
      }

    render() {
        return (
            <div className = "generator">
                <h2>Welcome to the Meme Generator!</h2>
                <MyMemes/>
                
                <h4 className = "pad"><i> Write some text and click on a picture to generate a meme!</i></h4>
                <Form className = "pad" inline>
                    <FormGroup>
                        <ControlLabel>Top &nbsp; </ControlLabel>
                        {''}
                        <FormControl 
                            type="text"
                            onChange= {event => this.setState({text0: event.target.value})}
                            ></FormControl>
                    </FormGroup>
                    &nbsp; &nbsp;&nbsp;
                    <FormGroup>
                        <ControlLabel>Bottom &nbsp;</ControlLabel>
                        {''}
                        <FormControl 
                            type="text"
                            onChange= {event => this.setState({text1: event.target.value})}

                            ></FormControl>
                    </FormGroup>
                </Form>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem 
                            key={index}
                            meme={meme}
                            text0={this.state.text0}
                            text1={this.state.text1}
                            />
                        )
                    })
                }
                <div className="meme-button" onClick={() => {
                    this.setState({memeLimit: this.state.memeLimit+10})
                }}>Load 10 more memes...</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(MemeGallery);