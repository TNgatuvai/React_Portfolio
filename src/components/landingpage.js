import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src="/images/Profilepic.jpg"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        
                        <hr/>

                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB </p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/tali-ngatuvai/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin"  aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/TNgatuvai" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github"  aria-hidden="true" />
                            </a>

                            {/* Facebook */}
                            <a href="https://www.facebook.com/TaliNgatuvai/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook"  aria-hidden="true" />
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/tali_ngatuvai/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram"  aria-hidden="true" />
                            </a>



                        </div>

                    </div>

                </Cell>
            </Grid>

        </div>
      )
    }
}

export default Landing;