import React, {Component} from 'react';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.JPG';
import Portfolio from './Portfolio';
import Generator from '../projects/generator'

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
      this.setState({ displayBio: !this.state.displayBio });
    }
  
    render() {
      return (
        <div>
          <img src={profile} alt='profile' className='profile' />
          <h1>Hello!</h1>
          <p>My name is Solana.</p>
          <Title />
          <p>I'm always looking forward to working on meaningful projects.</p>
          {
            this.state.displayBio ? (
              <div>
                <p>In addition to coding, I enjoy hot yoga, painting, and making moodboards.</p>
                <button onClick = {this.toggleDisplayBio}>Show Less</button>
              </div>
            ) : (
              <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
              </div>
            )
          }
          <hr />
          <Portfolio/>
          <hr />
          <SocialProfiles />

        </div>
      )}
    }

export default App;