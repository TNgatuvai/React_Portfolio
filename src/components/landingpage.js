import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                        alt="avatar"
                        className="avatar-img"
                    />
                <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>

                </div>

                </Cell>
            </Grid>

        </div>
      )
    }
}

export default Landing;