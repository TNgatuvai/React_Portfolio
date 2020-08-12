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
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
                            alt="avatar"
                            style={{height: '200px'}}
                        />

                        <h2 style={{paddingTop: '2em'}}>Tali Ngatuvai</h2>
                        <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>(801) 822-7000</p>
                        <h5>Email</h5>
                        <p>Tngatuvai85@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </div>Left Side
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                   
                    <Education 
                       startYear={2020}
                       endYear={2024}
                       schoolName="My University"
                       schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />

                    <Education 
                       startYear={2020}
                       endYear={2024}
                       schoolName="My University"
                       schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                    />

                    <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Experience</h2>

                    <Experience 
                        startYear={2009}
                        endYear={2015}
                        jobName="First Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />

                    <Experience 
                        startYear={2009}
                        endYear={2015}
                        jobName="First Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills 
                        skill="HTML/CSS"
                        progress={75}
                    />

                    <Skills 
                        skill="JavaScript"
                        progress={50}
                    />

                    <Skills 
                        skill="React"
                        progress={50}
                    />

                    <Skills 
                        skill="NodeJS"
                        progress={25}
                    />



                </Cell>
            </Grid>
        </div>
       )
    }
}

export default Resume;