import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Tali Ngatuvai</h2>
                    <img 
                        src="/images/Profilepic.jpg"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>"Starve your distractions, Feed your focus!"</p>

                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (801) 822-7000
                                </ListItemContent>   
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    Tngatuvai85@gmail.com
                                </ListItemContent>   
                            </ListItem>

                                                        
                        </List>
                    </div>
                        

                </Cell>
            </Grid>
        </div>
       )
    }
}

export default Contact;