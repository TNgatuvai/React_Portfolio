import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlgin: 'center' }}>
                        <img 
                            src="/images/Profilepic.jpg" 
                            alt="avatar"
                            // style={{height: '200px'}}
                            className="resume-img"
                        />

                        <h2 style={{paddingTop: '2em'}}>Tali Ngatuvai</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Full Stack Web Developer leveraging years of project management experience with skills in problem solving, understanding complex ideas, and delivering finished products. Attained a B.S. in Business Management with 7+ years of research and development experience, and a certification in Full Stack Web Development from the University of Utah. Experience in React, MongoDB, Express, Node.js, Javascript, and more. Motivated through continual learning, collaboration amongst teams to accomplish a shared goal and always looking for the next challenge.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>(801) 822-7000</p>
                        <h5>Email</h5>
                        <p>Tngatuvai85@gmail.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </div>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                   
                    <Education 
                       startYear={2012}
                       endYear={2016}
                       schoolName="Utah Valley University"
                       schoolDescription="Business Management"
                    />

                    <Education 
                       startYear={2019}
                       endYear={2020}
                       schoolName="University of Utah"
                       schoolDescription="Certificate in Full Stack Web Development"
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Experience</h2>

                    <Experience 
                        startYear={2018}
                        endYear={2020}
                        jobName="Vivint Solar"
                        jobDescription="Customer Experience Operations Project Manager"
                    />

                    {/* <Experience 
                        startYear={2009}
                        endYear={2015}
                        jobName="First Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    /> */}
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills 
                        skill="HTML/CSS"
                        progress={80}
                    />

                    <Skills 
                        skill="JavaScript"
                        progress={50}
                    />

                    <Skills 
                        skill="React"
                        progress={30}
                    />

                    <Skills 
                        skill="NodeJS"
                        progress={20}
                    />



                </Cell>
            </Grid>
        </div>
       )
    }
}

export default Resume;