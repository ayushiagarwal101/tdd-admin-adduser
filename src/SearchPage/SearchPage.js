import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import './SearchPage.css'

class SearchPage extends Component{

    render() {
        return (
            <form>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5">  MANAGE ADMIN USER  </Typography>
                    </Toolbar>
                </AppBar>
                <div class="form-wrap">
                    <h3> USER SEARCH </h3>
                    First name :
                    <input type="text" name="name" />   <br/>

                    Last name :
                    <input type="text" name="name" /> <br/>
                    <input type="submit" value="Search" />
                    <input type="button" value ="Clear"/>
                    <input type="submit" value ="AddUser"/>

                </div>
                <div>
                    <AppBar position="static">
                        <Toolbar>

                            <Typography variant="h6"> ADMIN USER  </Typography>

                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <Grid container>
                        <Grid item sm> <Paper style={{  padding: 10 , margin: 10}}> FirstName  </Paper></Grid>
                        <Grid item sm> <Paper style={{  padding: 10 , margin: 10}}> LastName </Paper> </Grid>
                        <Grid item sm> <Paper style={{  padding: 10 , margin: 10}}> UserName</Paper>  </Grid>
                        <Grid item sm> <Paper style={{  padding: 10 , margin: 10}}> Title </Paper></Grid>
                        <Grid item sm> <Paper style={{  padding: 10 , margin: 10}}> Status </Paper></Grid>
                        <Grid item sm> <Paper style={{  padding: 10 , margin: 10}}> Edit </Paper> </Grid>
                    </Grid>
                </div>



            </form>
        )

    }


}

export default SearchPage