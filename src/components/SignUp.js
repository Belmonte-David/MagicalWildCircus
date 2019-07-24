import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import API from '../utils/API';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  margin: {
    margin: '10px',
  },

  textField: {
    flexBasis: 200,
  },
 button: {
   margin: '10px',
 },
  input: {
    display: 'none',
  },
});

class Signup extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email : "",
          showPassword: false,
          password: "",
          cpassword: "",
      }
      this.handleChange.bind(this);
      this.send.bind(this);     
  }
  
  send = event => {    
      if(this.state.email.length === 0){
          return;
      }
      if(this.state.password.length === 0 || this.state.password !== this.state.cpassword){
          return;
      }
      var _send = {
          email: this.state.email,
          password: this.state.password
      }
      API.signup(_send).then(function(data){
          localStorage.setItem('token', data.data.token);
          window.location = "/dashboard"
      },function(error){
          console.log(error);
          return;
      })
  }

  handleChange = event => {
      this.setState({
          [event.target.id]: event.target.value
      });
  }

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword });
  };

  login = () => {
    window.location = "/"
  }

  render() {
    const { classes } = this.props;
        return(
          <div>
            <h1>Les plus belles photos de cirques en quelques clics !</h1>
            <h4>Pour retrouver plus de 7 photos inédites de cirque veuillez vous inscrire!</h4>
          <TextField
        className={classes.margin}
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        label="Email"
        value={this.state.email} 
        onChange={this.handleChange}
      />
            <TextField
        id="password"
        className={classes.margin}
        type={this.state.showPassword ? 'text' : 'password'}
        label="Password"
        value={this.state.password} 
        onChange={this.handleChange}         
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}        
      /> 
      <TextField
        id="cpassword"
        className={classes.margin}
        type={this.state.showPassword ? 'text' : 'password'}
        label="Confirm Password"
        value={this.state.cpassword} 
        onChange={this.handleChange}         
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}        
      /> 
      <Button 
        variant="outlined" 
        className={classes.button} 
        onClick={this.send}
        block
        bsSize="large"
        type="submit">
      Inscription
      </Button> 
      <p>J'ai déjà un compte</p>   
      <Button 
        variant="outlined" 
        className={classes.button} 
        onClick={this.login}
        block
        bsSize="large"
        type="submit">
      Connection
      </Button>                 
        </div> )
        }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
    