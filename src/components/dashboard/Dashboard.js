import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import Pictures from '../Pictures';

const styles = theme => ({       
    button: {
      margin: '10px',
    },
    dashboard:{
      backgroundColor: '#A7A7A7',
    }
  });

class Dashboard extends React.Component {

    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.dashboard}>
                <h1>Les plus belles photos de cirque !</h1>
                <Pictures />
                <Button
                variant="outlined" 
                className={classes.button} 
                onClick={this.disconnect}
                block
                bsSize="large"
                type="submit"
                >
                Se déconnecter
                </Button>
            </div>
        )
    }
}
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Dashboard);
